import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWJiDPnggMGmFl3LA6dp1ImaeEoa9oLJk",
  authDomain: "task-list-76460.firebaseapp.com",
  projectId: "task-list-76460",
  storageBucket: "task-list-76460.firebasestorage.app",
  messagingSenderId: "357470215566",
  appId: "1:357470215566:web:37e6f0cb3e31275fd998df"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
