// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDBiSE-7yZPMjSpJVExoFDD4d-RtkV3csc",
  authDomain: "car-showroom-db96b.firebaseapp.com",
  projectId: "car-showroom-db96b",
  storageBucket: "car-showroom-db96b.firebasestorage.app",
  messagingSenderId: "616590461924",
  appId: "1:616590461924:web:d198e9f8a4051a27c795f1"
};

// Initialize Firebase ONLY ONCE
firebase.initializeApp(firebaseConfig);

// make auth global
const auth = firebase.auth();
