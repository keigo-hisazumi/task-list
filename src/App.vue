<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
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

let unsubscribeTodos: (() => void) | null = null

const completedCount = computed(() => todos.value.filter(t => t.completed).length)
const progressPercent = computed(() =>
  todos.value.length === 0 ? 0 : Math.round((completedCount.value / todos.value.length) * 100)
)

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
    }
  })
})

onUnmounted(() => {
  unsubscribeAuth?.()
  unsubscribeTodos?.()
})
</script>

<template>
  <div v-if="authLoading" class="loading-screen">
    <p>読み込み中...</p>
  </div>

  <AuthForm v-else-if="!currentUser" />

  <div v-else class="todo-app">
    <!-- 固定ヘッダー -->
    <header class="app-header">
      <h1>📝 Todoリスト</h1>
      <div class="user-info">
        <span class="user-email">{{ currentUser.email }}</span>
        <button class="logout-btn" @click="logout">ログアウト</button>
      </div>
    </header>

    <!-- 進捗エリア -->
    <div class="progress-section">
      <div class="progress-labels">
        <span>進捗 {{ progressPercent }}%</span>
        <span>{{ completedCount }} / {{ todos.length }} 完了</span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
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

/* ヘッダー */
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
  background-color: #242424;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 0.5em;
}

.app-header h1 {
  font-size: 1.6em;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.8em;
}

.user-email {
  font-size: 0.8em;
  opacity: 0.6;
}

.logout-btn {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.35em 0.75em;
  font-size: 0.8em;
  border-radius: 6px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 進捗セクション */
.progress-section {
  padding: 1em 1.2em 0.8em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.85em;
  opacity: 0.7;
  margin-bottom: 0.5em;
}

.progress-bar-track {
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #646cff, #a78bfa);
  border-radius: 3px;
  transition: width 0.4s ease;
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
  padding: 1em;
  margin-bottom: 0.5em;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: background-color 0.2s;
}

.todo-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  opacity: 0.45;
}

.todo-text {
  flex: 1;
  text-align: left;
}

.delete-btn {
  background-color: #ff4444;
  padding: 0.3em 0.7em;
  font-size: 0.85em;
  border-radius: 6px;
}

.delete-btn:hover {
  background-color: #ff6666;
}

.empty-message {
  color: rgba(255, 255, 255, 0.4);
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
  box-shadow: 0 4px 16px rgba(100, 108, 255, 0.45);
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
  box-shadow: 0 6px 20px rgba(100, 108, 255, 0.6);
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
}

/* タスク追加パネル */
.add-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2e2e2e;
  border-radius: 20px 20px 0 0;
  padding: 1em 1.5em 2em;
  z-index: 40;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.4);
}

.add-panel-handle {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  margin: 0 auto 1.2em;
}

.add-panel-title {
  font-size: 1.1em;
  margin: 0 0 1em;
  text-align: left;
}

.add-panel-input {
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  padding: 0.75em 1em;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.07);
  color: inherit;
  margin-bottom: 1em;
}

.add-panel-input:focus {
  outline: none;
  border-color: #646cff;
}

.add-panel-actions {
  display: flex;
  gap: 0.75em;
  justify-content: flex-end;
}

.cancel-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.6em 1.2em;
  border-radius: 8px;
  cursor: pointer;
}

.cancel-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.3);
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
  opacity: 0.9;
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

/* ライトモード */
@media (prefers-color-scheme: light) {
  .app-header {
    background-color: #ffffff;
    border-bottom-color: rgba(0, 0, 0, 0.08);
  }

  .logout-btn {
    border-color: rgba(0, 0, 0, 0.2);
  }

  .logout-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .progress-section {
    border-bottom-color: rgba(0, 0, 0, 0.06);
  }

  .progress-bar-track {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .todo-item {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .todo-item:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .empty-message {
    color: rgba(0, 0, 0, 0.4);
  }

  .add-panel {
    background-color: #f5f5f5;
  }

  .add-panel-input {
    background-color: #ffffff;
    border-color: rgba(0, 0, 0, 0.15);
    color: #213547;
  }

  .cancel-btn {
    border-color: rgba(0, 0, 0, 0.2);
    color: #213547;
  }

  .cancel-btn:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .add-panel-handle {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
