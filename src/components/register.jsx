import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../actions/auth";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Register = () => {
  const dispatch = useDispatch();

  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const {message} = useSelector((state) => state.message || {});

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    dispatch(register(name, username, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   setSuccessful(false);
  //   if(checkBtn.current.context._errors.length === 0) {
  //     dispatch(register(name, username, email, password))
  //       .then(() => {
  //         setSuccessful(true);
  //       })
  //       .catch(() => {
  //         setSuccessful(false);
  //       });
  //   }
  // };

  return (
    <form ref={form}>
      <div>
        {!successful && (
          <center
            style={{
              padding: "20px",
              margin: "30px 200px",
              border: "1px solid gray",
              background: "#F5F5F5",
              height: "500px",
            }}
          >
            <h1>Register</h1>
            <TextField
              required
              id="outlined-required"
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              style={{margin: "10px"}}
              onChange={onChangeName}
            />
            <br />
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
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              style={{margin: "10px"}}
              onChange={onChangeEmail}
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
              onClick={handleRegister}
            >
              Register
            </Button>
          </center>
        )}
      </div>
      {message && {message}}
      <Button style={{display: "none"}} ref={checkBtn} />
    </form>
  );
};

export default Register;
