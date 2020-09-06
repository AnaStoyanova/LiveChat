import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCbzPOKF8wxnXhBda3rwoWtg7J4xWSjxg8",
    authDomain: "chatroom-448b4.firebaseapp.com",
    databaseURL: "https://chatroom-448b4.firebaseio.com",
    projectId: "chatroom-448b4",
    storageBucket: "chatroom-448b4.appspot.com",
    messagingSenderId: "406015658034",
    appId: "1:406015658034:web:13fe9b3748d77fca04942b",
    measurementId: "G-TS3G2LH2KM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;