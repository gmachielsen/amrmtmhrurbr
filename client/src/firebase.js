  import firebase from "firebase";
  // import * as firebase from "firebase";

  // Your web app's Firebase configuration

  // var firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTHDOMAIN,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.FIREBASE_APP_ID
  // };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // export 

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();