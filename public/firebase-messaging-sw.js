importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB4rqztaiHd9-9I9cYdkkIP8tkwFHG5ipQ",
    authDomain: "miviajep2.firebaseapp.com",
    projectId: "miviajep2",
    storageBucket: "miviajep2.appspot.com",
    messagingSenderId: "767542129819",
    appId: "1:767542129819:web:531c6e4b2340131a75c23e",
    measurementId: "G-72MLM376HD"
  });

const messaging = firebase.messaging();
//con firebase cloud messaging no hace falta esta parte
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
