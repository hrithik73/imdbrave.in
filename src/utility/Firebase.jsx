// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

import { keys } from "../../key.js"

const firebaseConfig = {
  apiKey: keys.APIKEY,
  authDomain: keys.AUTH_DOMAIN,
  projectId: keys.PROJECT_ID,
  storageBucket: keys.STORAGE_BUCKET,
  messagingSenderId: keys.MESSAGING_SENDERID,
  appId: keys.APP_ID,
  measurementId: keys.MEASUREMENT_ID,
}

// firebase.initializeApp(firebaseConfig)
const app = firebase.initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore()
