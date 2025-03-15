import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5rhpNcHYnPJIhw3B81Nn5oSZA7RhRxt0",
  authDomain: "ejae-7a49f.firebaseapp.com",
  projectId: "ejae-7a49f",
  storageBucket: "ejae-7a49f.firebasestorage.app",
  messagingSenderId: "625752286928",
  appId: "1:625752286928:web:0d275f7440500f574320d5",
  measurementId: "G-WGHKG77QC2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);