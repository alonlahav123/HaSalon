import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2gUZHoKsuf9fMYk7MxhuMampFmhKC1Gs",
    authDomain: "hasalon-7897a.firebaseapp.com",
    databaseURL: "https://hasalon-7897a.firebaseio.com",
    projectId: "hasalon-7897a",
    storageBucket: "hasalon-7897a.appspot.com",
    messagingSenderId: "850479739740",
    appId: "1:850479739740:web:aeaafb31157620399c0799",
    measurementId: "G-DWFCK2W3B1"
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

export default DB;
