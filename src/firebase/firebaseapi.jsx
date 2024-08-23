import firebase from "@firebase/app-compat";

// Add the Firebase products that you want to use
import "@firebase/auth-compat";
import "@firebase/firestore-compat";

const firebaseConfig = {
  apiKey: "**************************",
authDomain: "***********************",
projectId: "******************",
storageBucket: "****************************",
appId: "****************",
measurementId: "********************",
  
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };