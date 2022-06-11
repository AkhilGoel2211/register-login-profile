import React from "react";
import Login from "./login";
import Register from "./register";

const StartPage = () => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
      <Login />
      <Register />
    </div>
  );
};

export default StartPage;
