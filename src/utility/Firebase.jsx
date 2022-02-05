import * as firebase from "firebase/app"
import { getStorage } from "firebase/storage"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = firebase.initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore()

export const ReadDB = async (lim, coll) => {
  const q = lim
    ? query(collection(db, coll), orderBy("timeInterval", "desc"), limit(lim))
    : query(collection(db, coll), orderBy("timeInterval", "desc"))

  const querySnapshot = await getDocs(q)

  const songData = []
  querySnapshot.forEach((doc) => {
    songData.push(doc.data())
  })
  return songData
}
