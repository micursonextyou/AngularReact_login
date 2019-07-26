import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBDEu4FLhXbjO0_jFZ2Q2N58BTCOobu3i8",
    authDomain: "usruarios.firebaseapp.com",
    databaseURL: "https://usruarios.firebaseio.com",
    projectId: "usruarios",
    storageBucket: "usruarios.appspot.com",
    messagingSenderId: "16171378404",
    appId: "1:16171378404:web:51da9a7199941e17"
});
let db=firebase.firestore();
//db.settings({timestampsInSnapshots:true});
 export default db;