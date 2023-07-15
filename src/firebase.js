import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyB2HYPK-hhkBq0YqcsxVB-W5w1kf--sNvU",
    authDomain: "changestreamfcm.firebaseapp.com",
    projectId: "changestreamfcm",
    storageBucket: "changestreamfcm.appspot.com",
    messagingSenderId: "857044044706",
    appId: "1:857044044706:web:8bcf1b7d6be3a20d7400fb",
    measurementId: "G-5ZB4Z47152"
  };

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getTheToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: process.env.VAPID_KEY})
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});