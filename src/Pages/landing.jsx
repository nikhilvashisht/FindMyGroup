import React from "react";
import Navbar from "../Components/navbar";
import Jumbotron from "../Components/jumbotron";
import SignUp from "../Components/signup";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "@firebase/app";


const firebaseConfig = {
//  Your config
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
