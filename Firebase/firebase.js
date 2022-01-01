// import * as firebase from 'firebase';
import firebase from "firebase/compat/app";
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfMcrVqfo1hLzf5fY9xZJiDfrfYbw4JwY",
    authDomain: "reactexam-e9c72.firebaseapp.com",
    projectId: "reactexam-e9c72",
    storageBucket: "reactexam-e9c72.appspot.com",
    messagingSenderId: "224318489467",
    appId: "1:224318489467:web:daa7a181d5ec4aae0e73de",
    measurementId: "G-MPQ6FBVBWC"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };