import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post("http://localhost:3004/products", { name, price })
      .then((res) => {
        console.log(res);
        alert("you product added successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        alert("error adding product");
      });
  }
  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
