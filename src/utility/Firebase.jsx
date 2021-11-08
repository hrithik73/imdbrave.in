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

export const ReadDB = async (lim, coll) => {
  const q = lim
    ? query(collection(db, coll), orderBy("timeInterval", "desc"), limit(lim))
    : query(collection(db, coll), orderBy("timeInterval", "desc"))

  // const q =
  const querySnapshot = await getDocs(q)

  const songData = []
  querySnapshot.forEach((doc) => {
    songData.push(doc.data())
  })
  return songData
}
