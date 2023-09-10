import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN7jF2uVbbW7O4LsHyc-cTlWMhDkGdjzs",
  authDomain: "music-d9797.firebaseapp.com",
  projectId: "music-d9797",
  storageBucket: "music-d9797.appspot.com",
  messagingSenderId: "866331110537",
  appId: "1:866331110537:web:b9eee0ef1dc6e57717ea58",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
