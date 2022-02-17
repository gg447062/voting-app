import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
