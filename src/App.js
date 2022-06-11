import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import "./App.css";

import StartPage from './components/startPage';
import Profile from "./components/profile";

import {clearMessage} from "./actions/message";

const App = () => {
  const navigate = useNavigate();
  const {user: currentUser} = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<StartPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/" element={<StartPage />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;