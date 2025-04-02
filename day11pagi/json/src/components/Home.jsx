import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState([]);
  const [count, setCount] = useState(1);

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
      .get(`http://localhost:3005/product?_page=${count}&_per_page=4`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setShowData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  function handleCategory(e) {
    let filterCategory = products.filter(
      (prod) => prod.category == e.target.value
    );

    setShowData(filterCategory);
  }

  function handleSearchData() {
    let filterData = products.filter((prod) =>
      prod.name.toLowerCase().includes(search.toLowerCase())
    );
    setShowData(filterData);
  }
  console.log(showData.items/4)
  return (
    <div>
      <Link to={"/create"}>
        <button>Create Product Data</button>
      </Link>
      <button onClick={handleAsc}>low to high</button>
      <button onClick={handleDesc}>high to low</button>
      <input
        type="text"
        placeholder="searching"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearchData}>Search</button>
      <select name="" id="" onChange={handleCategory}>
        <option value="">All</option>
        <option value="shoes">Shoes</option>
        <option value="slipper">Slipper</option>
        <option value="boot">boot</option>
      </select>
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
          {showData.data &&
            showData.data.map((prod) => {
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
      <div>
        <button disabled={count == 1} onClick={() => setCount(count - 1)}>
          prev
        </button>
        <span>{count}</span>
        <button disabled={count == Math.ceil(showData.items/4) } onClick={() => setCount(count + 1)}>next</button>
      </div>
    </div>
  );
};

export default Home;
