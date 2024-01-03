
  
  import { initializeApp } from 'firebase/app';
  import { getFirestore } from "firebase/firestore";
  import { getMessaging, getToken } from "firebase/messaging";

  // import {...} from "firebase/storage";
  
  const vapidKey = "BNsfVyshfqEwxKymDJNvmfcNPNrw7r9l8fI5F0MCXzfFvEP6jvwSrsjwyCvvAcdJsumxS_FLCmKE6q9ZuSZ0vFQ"


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
  
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const messaging = getMessaging();

  getToken(messaging, { vapidKey })
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
 