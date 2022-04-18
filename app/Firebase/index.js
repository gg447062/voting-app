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
  setDoc,
  doc,
  connectFirestoreEmulator,
} from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
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
const projectsRef = collection(db, 'projects');

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
export const sendVotes = async (address, cohort, votes /*id*/) => {
  try {
    await addDoc(votesRef, { address, cohort, votes });
    // await setDoc(doc(votersRef, id), {voted: true})
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
