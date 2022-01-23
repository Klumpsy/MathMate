import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBsNZ13cr-esFaJbdEmo2Z4-IktZ-yRcN4",

    authDomain: "mathmate-804f9.firebaseapp.com",
  
    databaseURL: "https://mathmate-804f9-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "mathmate-804f9",
  
    storageBucket: "mathmate-804f9.appspot.com",
  
    messagingSenderId: "984890868522",
  
    appId: "1:984890868522:web:60295cf386006acfb21453",
  
    measurementId: "G-6HYYJGN4B7"  
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider}

