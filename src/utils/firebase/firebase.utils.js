import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCeRXf8ETRwCL9BgSMKIhNb81LFwfBfXJg',

  authDomain: 'crwn-clothing-db-666bd.firebaseapp.com',

  projectId: 'crwn-clothing-db-666bd',

  storageBucket: 'crwn-clothing-db-666bd.appspot.com',

  messagingSenderId: '922307610620',

  appId: '1:922307610620:web:461c5ee3080f1e1cbb5479',
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
 
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef

}
