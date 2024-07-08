import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */

import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_APP_ID,
	projectId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	messagingSenderId: process.env.REACT_APP_FIREBASE_PROJECTID,
	appId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export const auth = getAuth(app);
