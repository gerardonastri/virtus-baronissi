// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9QL4B40OU2YZuC3Y4mKH5RQQg5xTNnio",
  authDomain: "virtus-baronissi.firebaseapp.com",
  projectId: "virtus-baronissi",
  storageBucket: "virtus-baronissi.appspot.com",
  messagingSenderId: "282180310871",
  appId: "1:282180310871:web:f5c2c4225ef2755652d012"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();
export default storage