import { useState, useEffect, useRef, useCallback } from 'react'
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
  serverTimestamp,
} from 'firebase/firestore'
import { auth, db } from './firebase'
import AuthForm from './components/AuthForm'

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

const SWIPE_CLOSE_THRESHOLD = 100

const TODOS_CACHE_KEY = (uid: string) => `todos_cache_${uid}`

const loadCachedTodos = (uid: string): TodoItem[] => {
  try {
    const raw = localStorage.getItem(TODOS_CACHE_KEY(uid))
    return raw ? (JSON.parse(raw) as TodoItem[]) : []
  } catch {
    return []
  }
}

const saveCachedTodos = (uid: string, items: TodoItem[]) => {
  try {
    localStorage.setItem(TODOS_CACHE_KEY(uid), JSON.stringify(items))
  } catch { /* ignore */ }
}

function usePanelSwipe(onClose: () => void) {
  const [translateY, setTranslateY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isSwipeClosing, setIsSwipeClosing] = useState(false)
  const dragStartY = useRef(0)

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY
    setTranslateY(0)
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    if (!isDragging) return
    const delta = e.touches[0].clientY - dragStartY.current
    setTranslateY(Math.max(0, delta))
  }

  const onTouchEnd = () => {
    if (translateY > SWIPE_CLOSE_THRESHOLD) {
      setIsDragging(false)
      setIsSwipeClosing(true)
      setTimeout(() => {
        setIsSwipeClosing(false)
        setTranslateY(0)
        onClose()
      }, 300)
    } else {
      setIsDragging(false)
      setTranslateY(0)
    }
  }

  const panelStyle: React.CSSProperties = isSwipeClosing
    ? { transform: 'translateY(100%)' }
    : isDragging
    ? { transform: `translateY(${translateY}px)`, transition: 'none' }
    : translateY > 0
    ? { transform: `translateY(${translateY}px)` }
    : {}

  return { panelStyle, isSwipeClosing, onTouchStart, onTouchMove, onTouchEnd }
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [todosLoading, setTodosLoading] = useState(false)

  const [newTodoText, setNewTodoText] = useState('')
  const [showAddPanel, setShowAddPanel] = useState(false)

  const [showEditPanel, setShowEditPanel] = useState(false)
  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null)
  const [editTodoText, setEditTodoText] = useState('')

  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | 'unsupported'>('unsupported')

  const completedCount = todos.filter(t => t.completed).length
  const incompleteCount = todos.filter(t => !t.completed).length
  const progressPercent = todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100)

  const updateBadge = useCallback((count: number) => {
    if ('setAppBadge' in navigator) {
      if (count > 0) {
        navigator.setAppBadge(count)
      } else {
        navigator.clearAppBadge()
      }
    }
  }, [])

  useEffect(() => {
    updateBadge(incompleteCount)
  }, [incompleteCount, updateBadge])

  const closeAddPanel = useCallback(() => {
    setShowAddPanel(false)
    setNewTodoText('')
  }, [])

  const closeEditPanel = useCallback(() => {
    setShowEditPanel(false)
    setEditingTodo(null)
    setEditTodoText('')
  }, [])

  const addSwipe = usePanelSwipe(closeAddPanel)
  const editSwipe = usePanelSwipe(closeEditPanel)

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [])

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission)
    }
  }, [])

  useEffect(() => {
    let unsubscribeTodos: (() => void) | null = null

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setAuthLoading(false)

      if (unsubscribeTodos) {
        unsubscribeTodos()
        unsubscribeTodos = null
        setTodos([])
        setTodosLoading(false)
      }

      if (user) {
        const cached = loadCachedTodos(user.uid)
        if (cached.length > 0) setTodos(cached)
        setTodosLoading(true)

        const todosRef = collection(db, 'users', user.uid, 'todos')
        const q = query(todosRef, orderBy('createdAt', 'asc'))
        unsubscribeTodos = onSnapshot(q, (snapshot) => {
          const items = snapshot.docs.map(d => ({
            id: d.id,
            text: d.data().text as string,
            completed: d.data().completed as boolean,
          }))
          setTodos(items)
          setTodosLoading(false)
          saveCachedTodos(user.uid, items)
        })

        if ('Notification' in window && Notification.permission === 'default') {
          Notification.requestPermission().then(result => {
            setNotificationPermission(result)
          })
        }
      }
    })

    return () => {
      unsubscribeAuth()
      unsubscribeTodos?.()
      if ('clearAppBadge' in navigator) navigator.clearAppBadge()
    }
  }, [])

  const addTodo = async () => {
    if (!currentUser || newTodoText.trim() === '') return
    const text = newTodoText.trim()
    closeAddPanel()
    await addDoc(collection(db, 'users', currentUser.uid, 'todos'), {
      text,
      completed: false,
      createdAt: serverTimestamp(),
    })
  }

  const toggleTodo = async (id: string) => {
    if (!currentUser) return
    const todo = todos.find(t => t.id === id)
    if (todo) {
      await updateDoc(doc(db, 'users', currentUser.uid, 'todos', id), {
        completed: !todo.completed,
      })
    }
  }

  const deleteTodo = async (id: string) => {
    if (!currentUser) return
    await deleteDoc(doc(db, 'users', currentUser.uid, 'todos', id))
  }

  const openEditPanel = (todo: TodoItem) => {
    setEditingTodo(todo)
    setEditTodoText(todo.text)
    setShowEditPanel(true)
  }

  const updateTodo = async () => {
    if (!currentUser || !editingTodo || editTodoText.trim() === '') return
    const id = editingTodo.id
    const text = editTodoText.trim()
    closeEditPanel()
    await updateDoc(doc(db, 'users', currentUser.uid, 'todos', id), { text })
  }

  const deleteTodoAndClose = async () => {
    if (!currentUser || !editingTodo) return
    const id = editingTodo.id
    closeEditPanel()
    await deleteTodo(id)
  }

  const deleteCompletedTodos = async () => {
    if (!currentUser) return
    const completed = todos.filter(t => t.completed)
    await Promise.all(
      completed.map(t => deleteDoc(doc(db, 'users', currentUser!.uid, 'todos', t.id)))
    )
  }

  const logout = async () => {
    setShowMenu(false)
    await signOut(auth)
  }

  const openAddPanel = () => {
    setShowAddPanel(true)
    setNewTodoText('')
  }

  if (authLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!currentUser) {
    return <AuthForm />
  }

  const overlayVisible = (showAddPanel || showEditPanel) && !addSwipe.isSwipeClosing && !editSwipe.isSwipeClosing

  return (
    <div className="todo-app">
      <div className="sticky-top">
        <header className="app-header">
          <h1>Todoリスト</h1>
          <div className="hamburger-menu" ref={menuRef}>
            <button
              className="hamburger-btn"
              onClick={() => setShowMenu(v => !v)}
              aria-label="メニューを開く"
              aria-expanded={showMenu}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            {showMenu && (
              <div className="menu-dropdown menu-fade-enter">
                <div className="menu-account">
                  <span className="menu-account-email">{currentUser.email}</span>
                </div>
                <div className="menu-divider"></div>
                <button className="menu-logout-btn" onClick={logout}>
                  <svg className="menu-logout-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  ログアウト
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="progress-section">
          <div className="progress-labels">
            <div className="progress-labels-left">
              {completedCount > 0 && (
                <button
                  className="delete-completed-btn"
                  onClick={deleteCompletedTodos}
                  title={`チェック済み ${completedCount} 件を削除`}
                >完了済みを削除</button>
              )}
              <span>進捗 {progressPercent}%</span>
            </div>
            <span>{completedCount} / {todos.length} 完了</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: progressPercent + '%' }}></div>
          </div>
        </div>

        {notificationPermission === 'denied' && (
          <div className="notification-banner">
            バッジを表示するには、設定 › Safari › 通知 で許可してください
          </div>
        )}
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`todo-item${todo.completed ? ' completed' : ''}`}
            onClick={() => openEditPanel(todo)}
          >
            <span onClick={e => e.stopPropagation()}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
            </span>
            <span className="todo-text">{todo.text}</span>
          </div>
        ))}
        {todos.length === 0 && !todosLoading && (
          <p className="empty-message">タスクがありません。＋ボタンで追加してください。</p>
        )}
      </div>

      <button className="fab" onClick={openAddPanel} aria-label="タスクを追加">
        <span className="fab-icon">＋</span>
      </button>

      {overlayVisible && (
        <div
          className="overlay fade-enter"
          onClick={showAddPanel ? closeAddPanel : closeEditPanel}
        ></div>
      )}

      {showAddPanel && (
        <div
          className={`add-panel${addSwipe.isSwipeClosing ? ' slide-up-leave' : ' slide-up-enter'}`}
          style={addSwipe.panelStyle}
          onTouchStart={addSwipe.onTouchStart}
          onTouchMove={addSwipe.onTouchMove}
          onTouchEnd={addSwipe.onTouchEnd}
        >
          <div className="add-panel-handle"></div>
          <div className="add-panel-header">
            <button className="close-btn" onClick={closeAddPanel} aria-label="閉じる">✕</button>
            <h2 className="add-panel-title">タスクを追加</h2>
          </div>
          <input
            value={newTodoText}
            onChange={e => setNewTodoText(e.target.value)}
            type="text"
            className="add-panel-input"
            placeholder="新しいタスクを入力..."
            autoFocus
          />
          <div className="add-panel-actions">
            <button className="add-btn" onClick={addTodo} disabled={newTodoText.trim() === ''}>追加</button>
          </div>
        </div>
      )}

      {showEditPanel && (
        <div
          className={`add-panel${editSwipe.isSwipeClosing ? ' slide-up-leave' : ' slide-up-enter'}`}
          style={editSwipe.panelStyle}
          onTouchStart={editSwipe.onTouchStart}
          onTouchMove={editSwipe.onTouchMove}
          onTouchEnd={editSwipe.onTouchEnd}
        >
          <div className="add-panel-handle"></div>
          <div className="add-panel-header">
            <button className="close-btn" onClick={closeEditPanel} aria-label="閉じる">✕</button>
            <h2 className="add-panel-title">タスクを編集</h2>
          </div>
          <input
            value={editTodoText}
            onChange={e => setEditTodoText(e.target.value)}
            type="text"
            className="add-panel-input"
            placeholder="タスクを入力..."
            onKeyUp={e => e.key === 'Enter' && updateTodo()}
            autoFocus
          />
          <div className="add-panel-actions edit-panel-actions">
            <button className="delete-btn edit-delete-btn" onClick={deleteTodoAndClose}>削除</button>
            <button className="add-btn" onClick={updateTodo} disabled={editTodoText.trim() === ''}>保存</button>
          </div>
        </div>
      )}
    </div>
  )
}
