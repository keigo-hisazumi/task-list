<script setup lang="ts">
import { ref } from 'vue'

// Todo項目の型定義
interface TodoItem {
  id: number
  text: string
  completed: boolean
}

// リアクティブなデータ
const todos = ref<TodoItem[]>([])
const newTodoText = ref('')
let nextId = 1

// Todo項目を追加する関数
const addTodo = () => {
  if (newTodoText.value.trim() === '') {
    return
  }
  
  todos.value.push({
    id: nextId++,
    text: newTodoText.value,
    completed: false
  })
  
  newTodoText.value = ''
}

// Todo項目を削除する関数
const deleteTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

// Todo項目の完了状態を切り替える関数
const toggleTodo = (id: number) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}
</script>

<template>
  <div class="todo-app">
    <h1>📝 Todoリスト</h1>
    
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
.todo-app {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
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
