import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [dark, setDark] = useState(false);

  function handleDelete(id) {
    axios
      .delete("http://localhost:3004/products/" + id)
      .then((res) => {
        console.log(res);
        alert("product deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete product");
      });

    let filterProduct = products.filter((product) => product.id !== id);
    setProducts(filterProduct);
  }

  useEffect(() => {
    axios.get("http://localhost:3004/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div style={{backgroundColor:dark?"black":"white", color:dark?"white":"black"}}>
      <h1>Product page</h1>
      <button onClick={() => setDark(!dark)}>Dark mode</button>
      <Link to={"/createProduct"}>
        <button>Create product </button>
      </Link>
      <div>
        {products.map((product) => (
          <div
            style={{
              border: "1px solid black",
              width: "200px",
              marginBottom: "5px",
            }}
            key={product.id}
          >
            <p>Product Name :{product.name}</p>
            <p>Price:{product.price} </p>
            <button
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
