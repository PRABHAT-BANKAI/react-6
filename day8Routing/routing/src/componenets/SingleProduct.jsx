import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const SingleProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/about");
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  console.log(product);
  return (
    <div>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} className="h-55" />
          <h2>Price: ${product.price}</h2>
          <button>Add to Cart</button>
          <button onClick={handleBack}>back</button>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
