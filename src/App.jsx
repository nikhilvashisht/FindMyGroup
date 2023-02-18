import React from "react";
import Landing from "./Pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatRoom from "./Pages/chatroom";
import DashBoard from "./Pages/mainpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<DashBoard />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
