
  
  import { initializeApp } from 'firebase/app';
  import { getFirestore } from "firebase/firestore";
  // import {...} from "firebase/functions";
  // import {...} from "firebase/storage";
  
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB4rqztaiHd9-9I9cYdkkIP8tkwFHG5ipQ",
    authDomain: "miviajep2.firebaseapp.com",
    projectId: "miviajep2",
    storageBucket: "miviajep2.appspot.com",
    messagingSenderId: "767542129819",
    appId: "1:767542129819:web:531c6e4b2340131a75c23e",
    measurementId: "G-72MLM376HD"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);