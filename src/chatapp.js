import firebase from'firebase/compat/app' 
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjJANqqqLlR6Pfsbv_W9lmItJNduCmnyI",
  authDomain: "chatapp-ebc34.firebaseapp.com",
  projectId: "chatapp-ebc34",
  storageBucket: "chatapp-ebc34.appspot.com",
  messagingSenderId: "558600334677",
  appId: "1:558600334677:web:ae435efd2bb83655f813dc",
  measurementId: "G-ZR1WKYSZLB"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export{firebaseApp, db,auth};
export default firebase;