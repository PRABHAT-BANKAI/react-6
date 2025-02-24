import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // hook always on top of function
  const [product, setProduct] = useState([]);
  function handleInc() {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1); in this setCount functrion always remeber previous value
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);

    setProduct([
      {
        title: "adidas",
        price: 100,
        quantity: 10,
      },
      {
        title: "nike",
        price: 150,
        quantity: 5,
      },
      {
        title: "puma",
        price: 80,
        quantity: 20,
      },
    ]);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleInc}>inc</button>
      {product.map((element,index) => {
        return (
          <div key={index}>
            <p>Title :{element.title}</p>
            <p>Price :{element.price}</p>
            <p>Quantity:{element.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
