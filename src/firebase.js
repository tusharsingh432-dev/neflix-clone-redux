import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhbiaCYV6nyi4O9okOtmWB10SaAQXpX0k",
  authDomain: "netflix-clone-redux-4b05e.firebaseapp.com",
  projectId: "netflix-clone-redux-4b05e",
  storageBucket: "netflix-clone-redux-4b05e.appspot.com",
  messagingSenderId: "521184439185",
  appId: "1:521184439185:web:12e2f17ffa279ab8474830"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;