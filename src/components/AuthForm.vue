<script setup lang="ts">
import { ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase'

const email = ref('')
const password = ref('')
const isLogin = ref(true)
const errorMessage = ref('')
const loading = ref(false)

const submit = async () => {
  if (!email.value || !password.value) return

  loading.value = true
  errorMessage.value = ''

  try {
    if (isLogin.value) {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    } else {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
    }
  } catch (err: unknown) {
    const code = (err as { code?: string }).code ?? ''
    errorMessage.value = getErrorMessage(code)
  } finally {
    loading.value = false
  }
}

const getErrorMessage = (code: string): string => {
  const messages: Record<string, string> = {
    'auth/user-not-found': 'メールアドレスが見つかりません',
    'auth/wrong-password': 'パスワードが正しくありません',
    'auth/invalid-credential': 'メールアドレスまたはパスワードが正しくありません',
    'auth/email-already-in-use': 'このメールアドレスは既に使用されています',
    'auth/weak-password': 'パスワードは6文字以上にしてください',
    'auth/invalid-email': 'メールアドレスの形式が正しくありません',
    'auth/too-many-requests': 'ログイン試行が多すぎます。しばらく後に再試行してください',
  }
  return messages[code] ?? 'エラーが発生しました。再試行してください'
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>📝 Todoリスト</h1>
      <h2>{{ isLogin ? 'ログイン' : 'アカウント作成' }}</h2>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="example@email.com"
            required
            autocomplete="email"
          />
        </div>

        <div class="form-group">
          <label for="password">パスワード</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="6文字以上"
            required
            autocomplete="current-password"
          />
        </div>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <button type="submit" :disabled="loading" class="submit-btn">
          {{ loading ? '処理中...' : (isLogin ? 'ログイン' : '登録') }}
        </button>
      </form>

      <p class="toggle-text">
        {{ isLogin ? 'アカウントをお持ちでない方は' : 'すでにアカウントをお持ちの方は' }}
        <button class="link-btn" @click="isLogin = !isLogin; errorMessage = ''">
          {{ isLogin ? '新規登録' : 'ログイン' }}
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1em;
}

.auth-card {
  width: 100%;
  max-width: 400px;
  padding: 2em;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

h1 {
  font-size: 2em;
  margin-bottom: 0.2em;
}

h2 {
  font-size: 1.2em;
  font-weight: normal;
  margin-bottom: 1.5em;
  opacity: 0.7;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  margin-bottom: 1em;
}

label {
  font-size: 0.9em;
  opacity: 0.8;
}

input {
  width: 100%;
  box-sizing: border-box;
}

.error-message {
  color: #ff6b6b;
  font-size: 0.9em;
  margin: 0.5em 0;
}

.submit-btn {
  width: 100%;
  margin-top: 0.5em;
  padding: 0.8em;
  font-size: 1em;
}

.toggle-text {
  margin-top: 1.5em;
  font-size: 0.9em;
  opacity: 0.7;
  text-align: center;
}

.link-btn {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  text-decoration: underline;
}

.link-btn:hover {
  color: #5a6fd6;
}

@media (prefers-color-scheme: light) {
  .auth-card {
    background-color: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
