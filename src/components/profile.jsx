import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../actions/auth";

import Button from "@mui/material/Button";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user: currentUser} = useSelector((state) => state.auth);
  if(!currentUser) {
    return navigate("/login");
  }

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <center>
      <h1>Profile</h1>
      <p>ID: {currentUser._id}</p>
      <p>Name: {currentUser.name}</p>
      <p>Username: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <br />
      <Button
        variant="contained"
        style={{margin: "10px"}}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </center>
  );
};

export default Profile;
