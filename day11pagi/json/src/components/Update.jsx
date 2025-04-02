import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:3005/product/"+id, productData)
      .then((res) => {
        console.log(res);
        alert("Product added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product");
      });
  }

  useEffect(() => {
    axios.get("http://localhost:3005/product/" + id).then((res) => {
      setProductData(res.data);
      console.log(res.data)
    });
  },[]);
  return (
    <div>
      <h1>Update Product</h1>
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
        <button>update product</button>
      </form>
    </div>
  );
};

export default Update;
