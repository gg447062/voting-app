import { initializeApp } from 'firebase/app';
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from 'firebase/functions';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  connectFirestoreEmulator,
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
const db = getFirestore(app);
const functions = getFunctions(app);

if (window.location.hostname === 'localhost') {
  connectFunctionsEmulator(functions, 'localhost', 5001);
  connectFirestoreEmulator(db, 'localhost', 8080);
}

// db references
const votersRef = collection(db, 'voters');
const votesRef = collection(db, 'votes');

// cloud functions
export const verifySignature = httpsCallable(functions, 'verifySignature');

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

// add votes to db
export const sendVotes = async (address, cohort, votes) => {
  try {
    await addDoc(votesRef, { address, cohort, votes });
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
