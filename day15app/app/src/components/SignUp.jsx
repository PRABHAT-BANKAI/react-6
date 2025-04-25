import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(setUserData(userData));
    alert("User registered successfully!");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
