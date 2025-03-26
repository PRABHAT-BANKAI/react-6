import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

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
                    <button>Edit</button>
                    <button>Delete</button>
                    <Link to={"/read/"+prod.id}>
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
