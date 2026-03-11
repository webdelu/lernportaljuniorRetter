const firebaseConfig = {
  apiKey: "AIzaSyDKxtk7OcMY4ZcLDH6BtCERDL7-cBBlBCc",
  authDomain: "juniorretter-6c73f.firebaseapp.com",
  projectId: "juniorretter-6c73f",
  storageBucket: "juniorretter-6c73f.firebasestorage.app",
  messagingSenderId: "1080406716533",
  appId: "1:1080406716533:web:24c4a0de1a5f8a0746c83c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const logout = () => auth.signOut().then(() => window.location.href = 'index.html');
const calculateLevel = (xp) => Math.floor((xp || 0) / 500) + 1;