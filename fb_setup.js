/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyDY4TTMa3souyfiZGidDk1wHTpICZmZYJg",
  authDomain: "geaigjhijefo.firebaseapp.com",
  databaseURL: "https://geaigjhijefo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geaigjhijefo",
  storageBucket: "geaigjhijefo.firebasestorage.app",
  messagingSenderId: "367927448547",
  appId: "1:367927448547:web:2aacd7d9885a8031ee46d6"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
