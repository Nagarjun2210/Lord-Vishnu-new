import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDMjX_N5TMppIJJgRQBsfsv4O_mcVJnb5Y",
    authDomain: "tutorial-68ed9.firebaseapp.com",
    projectId: "tutorial-68ed9",
    storageBucket: "tutorial-68ed9.appspot.com",
    messagingSenderId: "704995789380",
    appId: "1:704995789380:web:f153bd41608925e568ca11",
    measurementId: "G-B103GGJWK0"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref = firebase.database();
  export const storage = firebase.storage();
  export default firebase