// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQa1i_Tn59cCpFtMYe9k6Rg1hFCj324AU",
  authDomain: "netfix-gpt-7032e.firebaseapp.com",
  projectId: "netfix-gpt-7032e",
  storageBucket: "netfix-gpt-7032e.firebasestorage.app",
  messagingSenderId: "566602028971",
  appId: "1:566602028971:web:2cacc3d88b6bdc47d2a4ee",
  measurementId: "G-23D89V0XGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();