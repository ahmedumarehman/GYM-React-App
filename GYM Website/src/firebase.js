// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getDatabase } from 'firebase/database'; // Import Realtime Database if needed
import { getAnalytics } from 'firebase/analytics';



//https://console.firebase.google.com/u/0/project/i227425i221677/database/i227425i221677-default-rtdb/data


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1V5WVJ-trT-ThdG8KZwi8e_gtEXZBiTE",
    authDomain: "i227425i221677.firebaseapp.com",
    projectId: "i227425i221677",
    storageBucket: "i227425i221677.firebasestorage.app",
    messagingSenderId: "25953177433",
    appId: "1:25953177433:web:07b0f05bb302ae713e0648",
    measurementId: "G-47BQKX45MM",
    databaseURL: "https://i227425i221677-default-rtdb.firebaseio.com/"  // Add your Realtime Database URL here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);  // Firestore instance
const realTimeDb = getDatabase(app);  // Realtime Database instance (if needed)
const analytics = getAnalytics(app);

export { db, realTimeDb }; // Export db for use in other components
