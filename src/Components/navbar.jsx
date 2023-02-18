import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";

const Navbar = ({ auth, provider }) => {
  const navigate = useNavigate();

  async function LogIn() {
    const credRes = await signInWithRedirect(auth, provider);
    console.log(credRes);
    localStorage.setItem("user", credRes);
    navigate("/feed");
  }

  return (
    <div className="flex justify-between pt-3 px-5">
      <h1 className="text-xl font-semibold">Find My Group</h1>

      <button
        className="py-2 px-4 bg-[#5dc9ff] rounded-md font-semibold"
        onClick={() => LogIn()}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
