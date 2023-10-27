import React from "react";
import './AddProduct.css'
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const url = `http://localhost:5000/product`
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
};

  return (
    <div>
      <div>
        <h1>Add a New Product</h1>
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("img1")} placeholder="img1" />
          <input {...register("img2")} placeholder="img2" />
          <input {...register("img3")} placeholder="img3" />
          <input {...register("title")} placeholder="Title" />
          <input {...register("brand")} placeholder="brand" />
          <input type="number" {...register("price")} placeholder="price" />
          <input type="dubble" {...register("rating")} placeholder="rating" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
