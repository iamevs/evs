import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDySWrrti1fg2TnqcUk3JKnJ_a0TT26LG4",
    authDomain: "portfolio-contact-form-6a1a8.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-6a1a8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-contact-form-6a1a8",
    storageBucket: "portfolio-contact-form-6a1a8.appspot.com",
    messagingSenderId: "751463847011",
    appId: "1:751463847011:web:5879fb4af5930844a0d456"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

// var fname = document.getElementById("fname");
// var lname = document.getElementById("lname");
// var email = document.getElementById("email");
// var contact = document.getElementById("contact");
// var textarea = document.getElementById("textarea");
// var submit = document.getElementById("submit");

// submit.addEventListener("click", function () {
//     event.preventDefault();
//     const db = getFirestore();
//     addDoc(collection(db, "contact"), {
//         fname: fname.value,
//         lname: lname.value,
//         email: email.value,
//         contact: contact.value,
//         textarea: textarea.value
//     });
// });

import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});