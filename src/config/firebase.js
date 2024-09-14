import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import {getFirestore,doc, setDoc,getDoc } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyCKYfSBcEZOWEINqVi6-IPgo_JqEcw5ltA",
    authDomain: "food-management-c4e4c.firebaseapp.com",
    projectId: "food-management-c4e4c",
    storageBucket: "food-management-c4e4c.appspot.com",
    messagingSenderId: "551051213599",
    appId: "1:551051213599:web:e7e8bd074720678d10ce2a",
    measurementId: "G-G8V5SEFKE8"
  }

  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)
  const db=getFirestore(app)
   async function  register(user){

    const{email,password,fullname,number}=user

   const user_signup= await createUserWithEmailAndPassword(auth, email, password)

   await setDoc(doc(db, "users", "userdetail"), {
   number,fullname
  });

   alert("register successfully")

   console.log(user_signup)
 
  }

   async function getuser(){

    const docRef = doc(db, "users", "userdetail");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const user=docSnap.data()
      return user
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }

   async function Login(user){
    const{email,password}=user
    const user_login=await signInWithEmailAndPassword(auth, email, password)
 console.log(user_login)
 alert("login successfully")

  }


  export{
    register,
    Login,
 getuser
}