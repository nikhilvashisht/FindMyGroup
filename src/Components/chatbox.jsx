import React from "react";
import { GrNext } from "react-icons/gr";
import { redirect, useNavigate } from "react-router-dom";

const ChatBox = ({ title }) => {
  const navigate = useNavigate();

  function toNextPage(title) {
    navigate("/chat", { state: { GroupName: title } });
  }

  return (
    <div className="w-full my-3 pl-3 flex h-20 justify-between sm:pl-10 sm:pr-5 sm:w-auto rounded-lg bg-gradient-to-tr from-[#5dc9ff] to-slate-200">
      <h1 className="pt-4 break-all sm:text-3xl text-2xl font-semibold">
        {title}
      </h1>
      <button className="m-3" onClick={() => toNextPage(title)}>
        <GrNext size={25} />
      </button>
    </div>
  );
};

export default ChatBox;
