import  firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCG36Eu0ZW_oJdTV83_3ysxu95MsNTJUXk",
    authDomain: "react-chat-15d32.firebaseapp.com",
    databaseURL: "https://react-chat-15d32.firebaseio.com",
    projectId: "react-chat-15d32",
    storageBucket: "react-chat-15d32.appspot.com",
    messagingSenderId: "569250351338",
    appId: "1:569250351338:web:9b08787407fac3b419ef93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase