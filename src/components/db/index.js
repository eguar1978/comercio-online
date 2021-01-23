  
import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "coderhouse-c848e.firebaseapp.com",
    projectId: "coderhouse-c848e",
    storageBucket: "coderhouse-c848e.appspot.com",
    messagingSenderId: "326882340927",
    appId: "1:326882340927:web:7b5bfef9f64b2cbacf088a",
    measurementId: "G-32SLZJ2RP0"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}