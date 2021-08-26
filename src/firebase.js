
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAHAKprbw4U8R7oC993XcI370yNcK3SnxI",
    authDomain: "twitter-clone-94599.firebaseapp.com",
    projectId: "twitter-clone-94599",
    storageBucket: "twitter-clone-94599.appspot.com",
    messagingSenderId: "1014629381673",
    appId: "1:1014629381673:web:80de1efed9e890d08c4e38",
    measurementId: "G-WLZ91J240M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export default db;