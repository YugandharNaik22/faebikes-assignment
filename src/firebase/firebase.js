
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlRA0xaxFoAjAPFsQQRSyRsbfz6kcri0s",
    authDomain: "swiggy-6e68a.firebaseapp.com",
    databaseURL: "https://swiggy-6e68a-default-rtdb.firebaseio.com",
    projectId: "swiggy-6e68a",
    storageBucket: "swiggy-6e68a.appspot.com",
    messagingSenderId: "352304391096",
    appId: "1:352304391096:web:71a3508a0101ffc1b8e54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

