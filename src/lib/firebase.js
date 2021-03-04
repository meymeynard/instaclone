import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: "AIzaSyCZaKa5jPoFFaBU4JOyF6MJYKsC9IOS960",
  authDomain: "instaclone-b2c78.firebaseapp.com",
  projectId: "instaclone-b2c78",
  storageBucket: "instaclone-b2c78.appspot.com",
  messagingSenderId: "54676476611",
  appId: "1:54676476611:web:d85de8dffe3cc6caf2c876"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

// here is where I want to call the seed file ONCE
// seedDatabase(firebase)

export { firebase, FieldValue }
