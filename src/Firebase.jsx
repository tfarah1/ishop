import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set ,get,child,push } from "firebase/database";


//Configuring the app server 
const firebaseConfig = {
    apiKey: "AIzaSyCeOCIDsAuDDcy1o9zaak09wO4ZWyN_vpM",
    authDomain: "laser-c7594.firebaseapp.com",
    projectId: "laser-c7594",
    storageBucket: "laser-c7594.appspot.com",
    messagingSenderId: "1098383648381",
    appId: "1:1098383648381:web:35e8ca897c0f02e4a1b314",
    measurementId: "G-3994H3J7M8"
  };

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// const array = [];

// Object.keys(yourObject).forEach((key) => {
//   array.push({[key]: object1[key]});
// });


//Reda  data from database
const db = getDatabase(app);
const dbRef = ref(db);
get(child(dbRef, `users/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log('firebase users',snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
//Write data to database
const userListRef = ref(db, "users");
const newPostRef = push(userListRef);
function WriteToDataBase(newPostReff){
    set(newPostRef, {
        "id":newPostReff.key,
        "name":"baker",
        "add":"lebanon",
        "phonenumber":"287989827"

})};
// objectjs.entries(users).map(([key,value]=>value));
// WriteToDataBase(newPostRef);

// function writeUserData(userId, name, email, imageUrl) {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   :