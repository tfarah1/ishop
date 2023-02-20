import {
  getAuth,
  signInWithEmailAndPassword ,
  // onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeOCIDsAuDDcy1o9zaak09wO4ZWyN_vpM",
  authDomain: "laser-c7594.firebaseapp.com",
  databaseURL: "https://laser-c7594-default-rtdb.firebaseio.com",
  projectId: "laser-c7594",
  storageBucket: "laser-c7594.appspot.com",
  messagingSenderId: "1098383648381",
  appId: "1:1098383648381:web:35e8ca897c0f02e4a1b314",
  measurementId: "G-3994H3J7M8",
};
const auth = getAuth();
// const user = auth.currentUser;
export const signIn = (email, password) => {

   return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      return error
    }); 
}
