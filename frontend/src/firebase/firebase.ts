// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACS5LeJ1gbmAdb2U8UzM9E8iYhD80niTM",
  authDomain: "hagu-882e3.firebaseapp.com",
  projectId: "hagu-882e3",
  storageBucket: "hagu-882e3.appspot.com",
  messagingSenderId: "268979382884",
  appId: "1:268979382884:web:101f4cc18d4781e5158d71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
