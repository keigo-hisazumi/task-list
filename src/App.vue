<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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

let unsubscribeTodos: (() => void) | null = null

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
    <div class="app-header">
      <h1>📝 Todoリスト</h1>
      <div class="user-info">
        <span class="user-email">{{ currentUser.email }}</span>
        <button class="logout-btn" @click="logout">ログアウト</button>
      </div>
    </div>

    <div class="todo-input">
      <input
        v-model="newTodoText"
        type="text"
        placeholder="新しいタスクを入力..."
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">追加</button>
    </div>

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
        タスクがありません。新しいタスクを追加してください。
      </p>
    </div>

    <div class="todo-stats">
      <p>合計: {{ todos.length }}件</p>
      <p>完了: {{ todos.filter(t => t.completed).length }}件</p>
      <p>未完了: {{ todos.filter(t => !t.completed).length }}件</p>
    </div>
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
  max-width: 600px;
  margin: 0 auto;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  flex-wrap: wrap;
  gap: 0.5em;
}

.app-header h1 {
  font-size: 2.5em;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.8em;
}

.user-email {
  font-size: 0.85em;
  opacity: 0.6;
}

.logout-btn {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4em 0.8em;
  font-size: 0.85em;
  border-radius: 6px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.todo-input {
  display: flex;
  gap: 0.5em;
  margin-bottom: 2em;
}

.todo-input input {
  flex: 1;
}

.todo-list {
  margin-bottom: 2em;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em;
  margin-bottom: 0.5em;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: background-color 0.2s;
}

.todo-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  opacity: 0.5;
}

.todo-text {
  flex: 1;
  text-align: left;
}

.delete-btn {
  background-color: #ff4444;
  padding: 0.4em 0.8em;
  font-size: 0.9em;
}

.delete-btn:hover {
  background-color: #ff6666;
}

.empty-message {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  padding: 2em;
}

.todo-stats {
  display: flex;
  justify-content: space-around;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.todo-stats p {
  margin: 0;
}

@media (prefers-color-scheme: light) {
  .logout-btn {
    border-color: rgba(0, 0, 0, 0.2);
  }

  .logout-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .todo-item {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .todo-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .empty-message {
    color: rgba(0, 0, 0, 0.5);
  }

  .todo-stats {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
