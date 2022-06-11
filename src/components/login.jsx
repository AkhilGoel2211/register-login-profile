import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../actions/auth";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import CircularProgress from "@mui/material/CircularProgress";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {isLoggedIn} = useSelector((state) => state.auth);
  const {message} = useSelector((state) => state.message || {});

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(username, password))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   if(checkBtn.current.context._errors.length === 0) {
  //     dispatch(login(username, password))
  //       .then(() => {
  //         navigate("/profile");
  //         window.location.reload();
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     setLoading(false);
  //   }
  // };

  // if(isLoggedIn) navigate("/profile");

  return (
    <form ref={form}>
      <div>
        <center
          style={{
            padding: "20px",
            margin: "30px 200px",
            border: "1px solid gray",
            background: "#F5F5F5",
            height: "500px",
          }}
        >
          <h1>Login</h1>
          <TextField
            required
            id="outlined-required"
            label="Username"
            variant="outlined"
            type="text"
            value={username}
            style={{margin: "10px"}}
            onChange={onChangeUsername}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            style={{margin: "10px"}}
            onChange={onChangePassword}
          />
          <br />
          <Button
            variant="contained"
            style={{margin: "10px"}}
            onClick={handleLogin}
            disabled={loading}
          >
            {/* <CircularProgress></CircularProgress> */}
            <span>Login</span>
          </Button>
          {message && {message}}
          <Button style={{display: "none"}} ref={checkBtn} />
        </center>
      </div>
    </form>
  );
};

export default Login;
