import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <h3>Product</h3>
      <h4>Child components</h4>
      <p>Count:{value}</p>
    </div>
  );
};

export default Product;
