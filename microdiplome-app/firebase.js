// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKiSj2e8SITMDyPFvnX8ZLGasdtjak9BM",
  authDomain: "microdiplome.firebaseapp.com",
  projectId: "microdiplome",
  storageBucket: "microdiplome.appspot.com",
  messagingSenderId: "810369586808",
  appId: "1:810369586808:web:4fab3ce68e79b6f1c97f8d",
};

const app = initializeApp(firebaseConfig);

export { app };
