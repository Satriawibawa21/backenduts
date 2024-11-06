const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

const firebaseConfig = {
  databaseURL: "https://utssatria-default-rtdb.firebaseio.com" // Ganti dengan URL Firebase Realtime Database Anda
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

module.exports = db;
