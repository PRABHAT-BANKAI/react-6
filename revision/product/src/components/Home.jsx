import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  function handleCategory(e) {
    console.log(e.target.value);
    if (e.target.value === "all") {
      axios.get("http://localhost:3004/products").then((res) => {
        setProducts(res.data);
      });
    } else {
      let filterCategory = products.filter(
        (prod) => prod.category === e.target.value
      );
      setProducts(filterCategory);
    }
  }

  let searchData = products;

  function handleSearch() {
    let filterData = searchData.filter((product) =>
      product.name.includes(search)
    );
    setProducts(filterData);
    if (search == "") {
      axios.get("http://localhost:3004/products").then((res) => {
        setProducts(res.data);
      });
    }
  }

  function handleSort() {
    let sortData = products.sort((a, b) => a.price - b.price);
    setProducts([...sortData]);
  }
  function handleSort2() {
    let sortData = products.sort((a, b) => b.price - a.price);
    setProducts([...sortData]);
  }

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
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h1>Product page</h1>
      <select onChange={handleCategory} name="" id="">
        <option value="all">All</option>
        <option value="slipper">Slipper</option>
        <option value="sports">Sports</option>
        <option value="shoes">Shoes</option>
      </select>
      <button onClick={handleSort}>low to high </button>
      <button onClick={handleSort2}>high to low </button>
      <input
        type="text"
        placeholder="searching"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>search</button>
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
            <p>Category :{product.category}</p>
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
