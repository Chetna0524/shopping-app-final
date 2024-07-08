import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */

import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCHK8i_DPrEQUa9d8c8C9na39Z-4EbAtQs",
	authDomain: "shopping-app-18033.firebaseapp.com",
	projectId: "shopping-app-18033",
	storageBucket: "shopping-app-18033.appspot.com",
	messagingSenderId: "1042612953262",
	appId: "1:1042612953262:web:179ce4135782e92f814d3f",
};

const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export const auth = getAuth(app);
