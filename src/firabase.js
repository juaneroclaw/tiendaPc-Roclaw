import firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC8rmftvRUMgVcp6tcgVyXsXV2-C5BLzQw",
    authDomain: "ecommerce-codehouse.firebaseapp.com",
    projectId: "ecommerce-codehouse",
    storageBucket: "ecommerce-codehouse.appspot.com",
    messagingSenderId: "947322564249",
    appId: "1:947322564249:web:e0a5c438a3846e89cb1208"
  })

  export const getFirebase = () => app;

  export const getFirestore = () => firebase.firestore(app);