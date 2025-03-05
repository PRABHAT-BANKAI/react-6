import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const About = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.data);
    //   });

    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap">
      {products &&
        products.map((item) => (
          <div key={item.id} className="border w-96">
            <img src={item.image} alt={item.title} className="h-56 " />
            <h2>{item.title}</h2>
            <p>Price ${item.price}</p>
            <p>{item.description.slice(0, 45)}</p>
            <Link to={"/product/"+item.id}>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-10 py-4.5 text-center me-2 mb-2 "
            >
           View Product
            </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default About;
