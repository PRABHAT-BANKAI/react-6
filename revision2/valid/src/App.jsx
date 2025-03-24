import React from "react";
import { useState } from "react";

const App = () => {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    // gender: "",
    password: "",
  });
  let [errors, setErrors] = useState({});
  let [showData, setShowData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      // Do form submission
      setShowData(userData);
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  function validateForm() {
    let valid = true;
    let object = {};
    if (!userData.name.trim()) {
      object.name = "user Name is required";
      valid = false;
    }
    if (!userData.email.trim()) {
      object.email = "user Email is required";
      valid = false;
    }
    if (!userData.password.trim()) {
      object.password = "user Password is required";
      valid = false;
    }
    setErrors(object);
    return valid;
  }
  return (
    <div>
      <h1>form </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />
        {/* <label>
          Gender:
          <input type="radio"  value="male" name="gender" /> Male
          <input type="radio" value="female" name="gender" /> Female
        </label> */}
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <br />
        <input type="submit" value="Submit" />
      </form>

      {showData && (
        <div>
          <p>Name: {showData.name}</p>
          <p>Email: {showData.email}</p>

          <p>Password: {showData.password}</p>
        </div>
      )}
    </div>
  );
};

export default App;
