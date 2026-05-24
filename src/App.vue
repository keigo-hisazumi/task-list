<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { onAuthStateChanged, signOut, type User } from 'firebase/auth'
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore'
import { auth, db } from './firebase'
import AuthForm from './components/AuthForm.vue'

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

const currentUser = ref<User | null>(null)
const authLoading = ref(true)
const todos = ref<TodoItem[]>([])
const newTodoText = ref('')
const showAddPanel = ref(false)
const notificationPermission = ref<NotificationPermission | 'unsupported'>('unsupported')


let unsubscribeTodos: (() => void) | null = null

const completedCount = computed(() => todos.value.filter(t => t.completed).length)
const incompleteCount = computed(() => todos.value.filter(t => !t.completed).length)
const progressPercent = computed(() =>
  todos.value.length === 0 ? 0 : Math.round((completedCount.value / todos.value.length) * 100)
)

const updateBadge = (count: number) => {
  if ('setAppBadge' in navigator) {
    if (count > 0) {
      navigator.setAppBadge(count)
    } else {
      navigator.clearAppBadge()
    }
  }
}

watch(incompleteCount, updateBadge, { immediate: true })

const subscribeTodos = (uid: string) => {
  const todosRef = collection(db, 'users', uid, 'todos')
  const q = query(todosRef, orderBy('createdAt', 'asc'))
  unsubscribeTodos = onSnapshot(q, (snapshot) => {
    todos.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text as string,
      completed: doc.data().completed as boolean,
    }))
  })
}

const addTodo = async () => {
  if (!currentUser.value || newTodoText.value.trim() === '') return
  await addDoc(collection(db, 'users', currentUser.value.uid, 'todos'), {
    text: newTodoText.value.trim(),
    completed: false,
    createdAt: serverTimestamp(),
  })
  newTodoText.value = ''
  showAddPanel.value = false
}

const deleteTodo = async (id: string) => {
  if (!currentUser.value) return
  await deleteDoc(doc(db, 'users', currentUser.value.uid, 'todos', id))
}

const toggleTodo = async (id: string) => {
  if (!currentUser.value) return
  const todo = todos.value.find((t) => t.id === id)
  if (todo) {
    await updateDoc(doc(db, 'users', currentUser.value.uid, 'todos', id), {
      completed: !todo.completed,
    })
  }
}

const logout = async () => {
  await signOut(auth)
}

const requestNotificationPermission = async () => {
  if (!('Notification' in window)) return
  if (Notification.permission === 'default') {
    const result = await Notification.requestPermission()
    notificationPermission.value = result
    if (result === 'granted') {
      updateBadge(incompleteCount.value)
    }
  } else {
    notificationPermission.value = Notification.permission
  }
}

const openAddPanel = () => {
  showAddPanel.value = true
  newTodoText.value = ''
}

const closeAddPanel = () => {
  showAddPanel.value = false
  newTodoText.value = ''
}

let unsubscribeAuth: (() => void) | null = null

onMounted(() => {
  if ('Notification' in window) {
    notificationPermission.value = Notification.permission
  }
  unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    currentUser.value = user
    authLoading.value = false

    if (unsubscribeTodos) {
      unsubscribeTodos()
      unsubscribeTodos = null
      todos.value = []
    }

    if (user) {
      subscribeTodos(user.uid)
      requestNotificationPermission()
    }
  })
})

onUnmounted(() => {
  unsubscribeAuth?.()
  unsubscribeTodos?.()
  if ('clearAppBadge' in navigator) navigator.clearAppBadge()
})
</script>

<template>
  <div v-if="authLoading" class="loading-screen">
    <p>読み込み中...</p>
  </div>

  <AuthForm v-else-if="!currentUser" />

  <div v-else class="todo-app">
    <!-- ヘッダー＋進捗をまとめてスティッキー固定 -->
    <div class="sticky-top">
      <header class="app-header">
        <h1>Todoリスト</h1>
        <div class="user-info">
          <span class="user-email">{{ currentUser.email }}</span>
          <button class="logout-btn" @click="logout">ログアウト</button>
        </div>
      </header>

      <div class="progress-section">
        <div class="progress-labels">
          <span>進捗 {{ progressPercent }}%</span>
          <span>{{ completedCount }} / {{ todos.length }} 完了</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
      </div>

      <div v-if="notificationPermission === 'denied'" class="notification-banner">
        バッジを表示するには、設定 › Safari › 通知 で許可してください
      </div>
    </div>

    <!-- タスクリスト -->
    <div class="todo-list">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        <span class="todo-text">{{ todo.text }}</span>
        <button class="delete-btn" @click="deleteTodo(todo.id)">削除</button>
      </div>

      <p v-if="todos.length === 0" class="empty-message">
        タスクがありません。＋ボタンで追加してください。
      </p>
    </div>

    <!-- FAB（右下の丸ボタン） -->
    <button class="fab" @click="openAddPanel" aria-label="タスクを追加">
      <span class="fab-icon">＋</span>
    </button>

    <!-- オーバーレイ -->
    <Transition name="fade">
      <div v-if="showAddPanel" class="overlay" @click="closeAddPanel"></div>
    </Transition>

    <!-- 下からスライドするタスク追加パネル -->
    <Transition name="slide-up">
      <div v-if="showAddPanel" class="add-panel">
        <div class="add-panel-handle"></div>
        <h2 class="add-panel-title">タスクを追加</h2>
        <input
          v-model="newTodoText"
          type="text"
          class="add-panel-input"
          placeholder="新しいタスクを入力..."
          @keyup.enter="addTodo"
          autofocus
        />
        <div class="add-panel-actions">
          <button class="cancel-btn" @click="closeAddPanel">キャンセル</button>
          <button class="add-btn" @click="addTodo" :disabled="newTodoText.trim() === ''">追加</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  opacity: 0.6;
}

.todo-app {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* スティッキーまとめコンテナ（ヘッダー＋進捗） */
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

/* ヘッダー */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em 1.2em;
  gap: 0.5em;
  overflow: hidden;
}

.app-header h1 {
  font-size: 1.3em;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.6em;
  flex-shrink: 0;
}

.user-email {
  font-size: 0.78em;
  color: rgba(33, 53, 71, 0.55);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.logout-btn {
  background-color: transparent;
  border: 1px solid rgba(33, 53, 71, 0.2);
  padding: 0.3em 0.65em;
  font-size: 0.78em;
  border-radius: 6px;
  cursor: pointer;
  color: #213547;
  white-space: nowrap;
}

.logout-btn:hover {
  background-color: rgba(33, 53, 71, 0.05);
  border-color: rgba(33, 53, 71, 0.35);
}

/* 進捗セクション */
.progress-section {
  padding: 0.6em 1.2em 0.8em;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.82em;
  color: rgba(33, 53, 71, 0.6);
  margin-bottom: 0.45em;
}

.progress-bar-track {
  width: 100%;
  height: 6px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #646cff, #a78bfa);
  border-radius: 3px;
  transition: width 0.4s ease;
}

/* 通知拒否バナー */
.notification-banner {
  padding: 0.55em 1.2em;
  background: #fef9c3;
  color: #854d0e;
  font-size: 0.8em;
  text-align: center;
  border-top: 1px solid #fde047;
}

/* タスクリスト */
.todo-list {
  flex: 1;
  padding: 1em 1.2em;
  padding-bottom: 5em;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.9em 1em;
  margin-bottom: 0.5em;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  transition: background-color 0.15s, box-shadow 0.15s;
}

.todo-item:hover {
  background-color: #f8f8ff;
  box-shadow: 0 1px 6px rgba(100, 108, 255, 0.1);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  opacity: 0.45;
}

.todo-text {
  flex: 1;
  text-align: left;
  color: #213547;
}

.delete-btn {
  background-color: #fee2e2;
  color: #dc2626;
  border: none;
  padding: 0.3em 0.65em;
  font-size: 0.82em;
  border-radius: 6px;
}

.delete-btn:hover {
  background-color: #fecaca;
  border-color: transparent;
}

.empty-message {
  color: rgba(33, 53, 71, 0.4);
  font-style: italic;
  padding: 3em 1em;
  text-align: center;
}

/* FABボタン */
.fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #646cff, #a78bfa);
  border: none;
  box-shadow: 0 4px 16px rgba(100, 108, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 0;
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(100, 108, 255, 0.55);
  border-color: transparent;
}

.fab-icon {
  font-size: 1.8em;
  line-height: 1;
  color: #fff;
  font-weight: 300;
}

/* オーバーレイ */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 30;
}

/* タスク追加パネル */
.add-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-radius: 20px 20px 0 0;
  padding: 1em 1.5em 2em;
  z-index: 40;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.12);
}

.add-panel-handle {
  width: 40px;
  height: 4px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  margin: 0 auto 1.2em;
}

.add-panel-title {
  font-size: 1.1em;
  margin: 0 0 1em;
  text-align: left;
  color: #213547;
}

.add-panel-input {
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  padding: 0.75em 1em;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
  color: #213547;
  margin-bottom: 1em;
}

.add-panel-input:focus {
  outline: none;
  border-color: #646cff;
  background-color: #ffffff;
}

.add-panel-actions {
  display: flex;
  gap: 0.75em;
  justify-content: flex-end;
}

.cancel-btn {
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.18);
  padding: 0.6em 1.2em;
  border-radius: 8px;
  cursor: pointer;
  color: #213547;
}

.cancel-btn:hover {
  background: rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.3);
}

.add-btn {
  background: linear-gradient(135deg, #646cff, #a78bfa);
  border: none;
  padding: 0.6em 1.5em;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.add-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.add-btn:not(:disabled):hover {
  opacity: 0.88;
  border-color: transparent;
}

/* スライドアップトランジション */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

/* フェードトランジション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
