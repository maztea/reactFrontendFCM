// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyB2HYPK-hhkBq0YqcsxVB-W5w1kf--sNvU",
    authDomain: "changestreamfcm.firebaseapp.com",
    projectId: "changestreamfcm",
    storageBucket: "changestreamfcm.appspot.com",
    messagingSenderId: "857044044706",
    appId: "1:857044044706:web:8bcf1b7d6be3a20d7400fb",
    measurementId: "G-5ZB4Z47152"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});