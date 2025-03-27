import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3005/product/${id}`)
      .then((res) => {
        console.log(res);
        alert("Product deleted");
        const filterData = products.filter((product) => product.id !== id);
        setProducts(filterData);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete product");
      });
  }
  function handleAsc() {
    let sorthingData = products.sort((a, b) => a.price - b.price);
    setProducts([...sorthingData]);
  }

  function handleDesc() {
    let sorthingData = products.sort((a, b) => b.price - a.price);
    setProducts([...sorthingData]);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3005/product")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Link to={"/create"}>
        <button>Create Product Data</button>
      </Link>
      <button onClick={handleAsc}>low to high</button>
      <button onClick={handleDesc}>high to low</button>
      <table border={""}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>

            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.category}</td>
                  <td>{prod.price}</td>
                  <td>
                    <Link to={"/update/" + prod.id}>
                      {" "}
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(prod.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link to={"/read/" + prod.id}>
                      <button>read</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
