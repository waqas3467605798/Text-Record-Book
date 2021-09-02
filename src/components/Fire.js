import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



var firebaseConfig = {
  apiKey: "AIzaSyAUmUkofFEAFbJckELiRVvoGkmzaetvp74",
  authDomain: "textrecordbook.firebaseapp.com",
  projectId: "textrecordbook",
  storageBucket: "textrecordbook.appspot.com",
  messagingSenderId: "304865891371",
  appId: "1:304865891371:web:a9858e1ea0ca76886c466e",
  measurementId: "G-RVNHTPWPMZ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


export default firebase;





