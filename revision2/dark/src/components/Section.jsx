import React, { useEffect, useState } from "react";

const Section = ({ dark }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 70px)",

        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h1>Section 1</h1>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} height={"200px"} />
            </div>
          );
        })}
    </div>
  );
};

export default Section;
