import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [productData, setProductData] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get("http://localhost:3005/product/" + id).then((res) => {
      console.log(res);
      setProductData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Single Product Page</h1>
      {productData && (
        <div>
          <p>Name:{productData.name}</p>
          <p>Category:{productData.category}</p>
          <p>Price:{productData.price}</p>
          <Link to={"/"}>
            {" "}
            <button>Back</button>
          </Link>

          {productData && (
            <table border={""}>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>

              
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{productData.id}</td>
                  <td>{productData.name}</td>
                  <td>{productData.category}</td>
                  <td>{productData.price}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Read;
