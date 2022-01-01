// import * as firebase from "firebase";
// import "firebase/auth";
// import 'firebase/firestore';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfMcrVqfo1hLzf5fY9xZJiDfrfYbw4JwY",
  authDomain: "reactexam-e9c72.firebaseapp.com",
  projectId: "reactexam-e9c72",
  storageBucket: "reactexam-e9c72.appspot.com",
  messagingSenderId: "224318489467",
  appId: "1:224318489467:web:daa7a181d5ec4aae0e73de",
  measurementId: "G-MPQ6FBVBWC"
};

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}
// const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth};