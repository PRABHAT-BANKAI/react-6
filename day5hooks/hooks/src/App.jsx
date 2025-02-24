import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //[] only first time render then useeffect will call
  //[value]when value is change after render will call useEffect

  console.log("after useEffect");
  return (
    <div className="main-container">
      <p>Count :{count}</p>
      <button onClick={() => setCount(count + 1)}>inc</button>

      {products && // condiiton rendering
        products.map((item) => {
          return (
            <div key={item.id} style={{ border: "1px solid black" }}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} height={"150px"} />
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
