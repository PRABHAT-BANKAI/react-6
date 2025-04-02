import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
  });
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3005/product", productData)
      .then((res) => {
        console.log(res);
        alert("Product added successfully");
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product");
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Name"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="category"
          value={productData.category}
          onChange={(e) =>
            setProductData({ ...productData, category: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="price"
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
        <br />
        <button>add product</button>
      </form>
    </div>
  );
};

export default Create;
