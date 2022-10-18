
import { initializeApp, getApps, getApp } from "firebase/app";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQtha2RsD-RrOTOEQOSg7r7qESk2h2rcY",
  authDomain: "aluta-1470f.firebaseapp.com",
  projectId: "aluta-1470f",
  storageBucket: "aluta-1470f.appspot.com",
  messagingSenderId: "758095462939",
  appId: "1:758095462939:web:75af7048ff1a82c2416ebe"
};



  // Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)


  export default storage
