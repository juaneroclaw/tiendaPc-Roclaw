import firebase from 'firebase/app'
import 'firebase/firestore';
const configFirebase = {
  appId: process.env.REACT_APP_APP_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}
const app = firebase.initializeApp(configFirebase)

  export const getFirebase = () => app;

  export const getFirestore = () => firebase.firestore(app);