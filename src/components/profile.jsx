import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../actions/auth";
import userInfo from "../services/user-service";
import Button from "@mui/material/Button";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user: currentUser} = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  console.log(content);

  useEffect(() => {
    userInfo().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);


  if(!currentUser) {
    return navigate("/login");
  }

  const handleLogout = () => {
    navigate("/login");
    dispatch(logout());
  };

  return (
    <center>
      <h3>{content}</h3>
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
