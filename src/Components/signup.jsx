import React from "react";
import { motion } from "framer-motion";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = ({ auth, provider }) => {
  const navigate = useNavigate();

  async function SignUp() {
    const credRes = await signInWithRedirect(auth, provider);
    const stringCreds = JSON.stringify(credRes.user);
    localStorage.setItem("user", stringCreds);
    navigate("/feed");
  }

  return (
    <div className="flex justify-center mt-20">
      <motion.div
        className="rounded-2xl bg-[#5dc9ff] w-fit py-4 px-6 font-bold text-2xl"
        whileHover={{
          borderRadius: "50px",
          backgroundColor: "hsl(218, 100%, 56%)",
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.9,
        }}
        onTap={() => SignUp()}
      >
        Sign Up!
      </motion.div>
    </div>
  );
};

export default SignUp;
