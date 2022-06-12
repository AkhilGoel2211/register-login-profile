import React from "react";
import {Route, Routes} from "react-router-dom";
// import {useSelector} from "react-redux";

import "./App.css";

import StartPage from './components/startPage';
import Profile from "./components/profile";

// import {clearMessage} from "./actions/message";

const App = () => {
  // const {user: currentUser} = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<StartPage />}></Route>
        <Route path="/gh-pages-url/profile" element={<Profile />}></Route>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/register-login-profile" element={<StartPage />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;