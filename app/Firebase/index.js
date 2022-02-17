import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
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

// db references
const votersRef = collection(database, 'voters');

// get whitelisted voter
export const getVoter = async (address) => {
  const voterQuery = query(
    votersRef,
    where('address', '==', address.toLowerCase()),
    where('voted', '==', false)
  );
  const voterSnapshot = await getDocs(voterQuery);
  const voters = [];
  voterSnapshot.forEach((voter) => voters.push(voter.data()));
  return voters[0];
};
