// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC8f2lTq9l1ygWC4ZwraEWNT4-MFqzRLxE",
	authDomain: "tomarket-96523.firebaseapp.com",
	projectId: "tomarket-96523",
	storageBucket: "tomarket-96523.appspot.com",
	messagingSenderId: "66647726845",
	appId: "1:66647726845:web:614ee07903410f190bbc94",
	measurementId: "G-HF870Q6RGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
