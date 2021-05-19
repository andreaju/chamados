import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig ={
    apiKey: "AIzaSyC8N2VMvEbHMMgFjuJV9-BYgjAzwpzj9eQ",
    authDomain: "chamados-fedd4.firebaseapp.com",
    databaseURL: "https://chamados-fedd4-default-rtdb.firebaseio.com",
    projectId: "chamados-fedd4",
    storageBucket: "chamados-fedd4.appspot.com",
    messagingSenderId: "1075179695356",
    appId: "1:1075179695356:web:c1ba1ea314258b5f0c7b79"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;