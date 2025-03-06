import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ userName: "", email: "", password: "" });
  const [error, setError] = useState({});
  const [showData, setShowData] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (validation()) {
      setShowData(data);
      setData({ userName: "", email: "", password: "" });
    }
  }

  function validation() {
    let valid = true;
    let obj = {};

    if (data.userName.trim() == "") {
      obj.userName = "User Name is required";
      valid = false;
    }
    if (!data.email.trim()) {
      obj.email = "Email is required";
      valid = false;
    }
    if (!data.password.trim()) {
      obj.password = "Password is required";
      valid = false;
    }
    setError(obj);
    return valid;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        style={{ width: "300px", border: "1px solid black", padding: "25px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="user"> UserName</label>
          <input
            id="user"
            type="text"
            placeholder="Enter your userName"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
          {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email"> Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button>Submit</button>
      </form>
      {showData && (
        <div>
          <h2>USERname :{showData.userName}</h2>
          <h2>Email :{showData.email}</h2>
          <h2>Password :{showData.password}</h2>
        </div>
      )}
    </div>
  );
};

export default Form;
