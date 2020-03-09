import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '@/secrets';

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp } = firebase.firestore;
export { TimeStamp };
