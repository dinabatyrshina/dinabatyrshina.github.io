import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyD2IYvtCbcouiQtD-41knU0lgtXvlEifCc",
    authDomain: "website-test-qa.firebaseapp.com",
    projectId: "website-test-qa",
    storageBucket: "website-test-qa.appspot.com",
    messagingSenderId: "978428634931",
    appId: "1:978428634931:web:cff7c57cbc6e2bf719c046",
    measurementId: "G-95Y1EE4VFP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);