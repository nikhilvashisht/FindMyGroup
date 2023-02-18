import React, { useRef, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebaseconfig from "../firebaseconfig";
import "../App.css";
import { Navigate, useLocation } from "react-router-dom";

const ChatRoom = (props) => {
  const location = useLocation();

  const GroupName = location.state.GroupName;

  const user = JSON.parse(localStorage.getItem("user"));

  const app = initializeApp(firebaseconfig);
  const db = getFirestore(app);
  const dummy = useRef();
  const messagesRef = collection(db, GroupName);
  const queryRef = query(messagesRef, orderBy("createdAt"), limit(50));
  const [messages] = useCollectionData(queryRef, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const uid = user.uid;
    const photoURL = user.photoURL;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return user && GroupName ? (
    <div className="App">
      <header className="text-center font-bold text-3xl">{GroupName}</header>
      <section>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        <span ref={dummy}></span>
      </section>
      <form onSubmit={sendMessage} className="py-3 px-3">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          className="p-5 text-white rounded-full mx-3"
        />
        <button
          className="bg-[#5dc9ff] rounded-full text-sm sm:text-2xl"
          type="submit"
          disabled={!formValue}
        >
          Send
        </button>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const user = JSON.parse(localStorage.getItem("user"));
  const messageClass = uid === user.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass} my-1`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatRoom;
