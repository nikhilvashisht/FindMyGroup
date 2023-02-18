import React from "react";
import Navbar from "../Components/navbar";
import Jumbotron from "../Components/jumbotron";
import SignUp from "../Components/signup";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "@firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAC1K2OAtD7RSIIcL28DwGVEyrXzAEihwk",
  authDomain: "findmygroup-62c6b.firebaseapp.com",
  projectId: "findmygroup-62c6b",
  storageBucket: "findmygroup-62c6b.appspot.com",
  messagingSenderId: "606897342393",
  appId: "1:606897342393:web:e5f3b12435a41dbb795868",
  measurementId: "G-6WF17LB3LQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Landing = () => {
  return (
    <>
      <Navbar auth={auth} provider={provider} />
      <Jumbotron />
      <SignUp auth={auth} provider={provider}/>
    </>
  );
};

export default Landing;
