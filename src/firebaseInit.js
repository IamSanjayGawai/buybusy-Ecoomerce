// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3XsqmTsnM3yC1qVIbR5TNruQ_vfKNGPA",
  authDomain: "buybusy-redux-a1109.firebaseapp.com",
  projectId: "buybusy-redux-a1109",
  storageBucket: "buybusy-redux-a1109.appspot.com",
  messagingSenderId: "1020421822591",
  appId: "1:1020421822591:web:1c2d8a149425e24546874a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

















































// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8J7AFN9h4jXG2K74EW4ONEOYYM53bZ8w",
//   authDomain: "buybusy-redux.firebaseapp.com",
//   projectId: "buybusy-redux",
//   storageBucket: "buybusy-redux.appspot.com",
//   messagingSenderId: "252643386212",
//   appId: "1:252643386212:web:5f4f16318ecebc11955071"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
