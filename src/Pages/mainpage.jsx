import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ChatBox from "../Components/chatbox";
import { Navigate, useLocation, useParams } from "react-router-dom";

const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? (
    <div>
      {/* navbar */}
      <div>
        <h1 className="text-center text-5xl font-bold mt-5">Your Feed</h1>

        {/* TODO: add user avatar here */}
        <div></div>
      </div>

      {/* search bar */}
      {/* <div className="flex justify-center">
        
        <div className="border-black border-2 mx-5 mt-5 rounded-lg px-5 py-3 flex">
          <input
            className="border-black border-2 px-5 py-4 rounded-full mx-5 bg-slate-300"
            type="text"
            placeholder="Search for an event"
          />

          <div className="border-black border-2 rounded-full py-5 px-6">
            <AiOutlineSearch size={25}/>
          </div>
        </div>
      </div> */}

      {/* chat rooms */}
      <div className="mx-10 mt-10 flex justify-between flex-wrap whitespace-nowrap">
        <ChatBox title="web3-meetup" />
        <ChatBox title="react-meetup" />
        <ChatBox title="honey-singh-concert" />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default DashBoard;
