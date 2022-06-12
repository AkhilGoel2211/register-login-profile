import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../actions/auth";
import userInfo from "../services/user-service";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user: currentUser} = useSelector((state) => state.auth);
  const [content, setContent] = useState("");

  useEffect(() => {
    userInfo().then(
      (response) => {
        console.log(response.data);
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

  console.log(content);

  if(!currentUser) {
    return navigate("/login");
  }

  const handleLogout = () => {
    navigate("/login");
    dispatch(logout());
  };

  return content !== "" ? (
    <center>
      <h1>Profile</h1>
      <p>ID: {content.data._id}</p>
      <p>Name: {content.data.name}</p>
      <p>Username: {content.data.username}</p>
      <p>Email: {content.data.email}</p>
      <p>CreatedAt: {content.data.createdAt}</p>
      <p>UpdatedAt: {content.data.updatedAt}</p>
      <br />
      <Button
        variant="contained"
        style={{margin: "10px"}}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </center>
  ) : (
    <center>
      <br />
      <h1>Loading</h1>
      <CircularProgress></CircularProgress>
    </center>
  );
};

export default Profile;
