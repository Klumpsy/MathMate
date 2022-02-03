import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import {getFirestore} from "@firebase/firestore"; 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,

    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  
    measurementId: process.env.REACT_APP_MEASUREMENT_ID  
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig); 

//CRUD
export const database = getFirestore(firebaseApp); 

//AUTH
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider}

