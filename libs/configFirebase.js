import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD-cx0jVbmlnfVGdf4XMz3CBgl9F1Qj7R4',
  authDomain: 'movies-app-160db.firebaseapp.com',
  projectId: 'movies-app-160db',
  storageBucket: 'movies-app-160db.appspot.com',
  messagingSenderId: '714086040846',
  appId: '1:714086040846:web:d9bc9ec3946d407c06c35f',
  measurementId: 'G-5P996SQP8R'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
