import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure You Want To Delete");
    if (confirm) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainning = products.filter((product) => product._id !== id);
          setProducts(remainning);
        });
    }
  };

  return (
    <div>
      <h1>All Data From The Server</h1>
      {products.map((product) => (
        <div key={product._id} className="products">
          <div className="imgs">
            <img src={product.img1} alt="" />
            <img src={product.img2} alt="" />
            <img src={product.img3} alt="" />
          </div>
          <div>
            <h1>Name: {product.title}</h1>
            <h3>Price: {product.price} $</h3>
            <h5>Rating: {product.rating}</h5>
            <p>{product.brand}</p>
          </div>
          <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
