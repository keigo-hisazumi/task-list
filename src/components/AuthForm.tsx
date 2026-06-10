import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase'

const getErrorMessage = (code: string): string => {
  const messages: Record<string, string> = {
    'auth/user-not-found': 'メールアドレスまたはパスワードが正しくありません',
    'auth/wrong-password': 'メールアドレスまたはパスワードが正しくありません',
    'auth/invalid-credential': 'メールアドレスまたはパスワードが正しくありません',
    'auth/email-already-in-use': 'このメールアドレスはすでに使用されています',
    'auth/weak-password': 'パスワードは6文字以上にしてください',
    'auth/invalid-email': 'メールアドレスの形式が正しくありません',
    'auth/too-many-requests': 'しばらくしてから再度お試しください',
  }
  return messages[code] ?? 'エラーが発生しました。もう一度お試しください'
}

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setErrorMessage('')
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setLoading(true)
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ''
      setErrorMessage(getErrorMessage(code))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="app-title">Todoリスト</h1>
        <h2 className="form-title">{isLogin ? 'ログイン' : '新規登録'}</h2>

        <form onSubmit={submit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="example@email.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="6文字以上"
              required
              autoComplete="current-password"
              minLength={6}
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading && <span className="loading-spinner"></span>}
            {isLogin ? 'ログイン' : '登録する'}
          </button>
        </form>

        <button onClick={toggleMode} className="btn-toggle">
          {isLogin ? 'アカウントをお持ちでない方はこちら' : 'すでにアカウントをお持ちの方はこちら'}
        </button>
      </div>
    </div>
  )
}
