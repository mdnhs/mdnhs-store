import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AddProduct = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://frozen-crag-61975.herokuapp.com/drones", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("product added");
          setMessage("successfully added product");
          reset("");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl  text-gray-800 font-medium mb-5">
        Add Product from here :
      </h2>
      {message && (
        <h4 className="bg-green-200 text-green-800 py-2">{message}</h4>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-5">
        <div>
          <label className="font-medium">Product Name</label>
          <input
            className="w-full p-3 mt-1 outline-none"
            {...register("name", { required: true })}
            placeholder="Enter Product Name"
          />
          {errors.name && (
            <span className="text-red-600 font-medium">Name is required</span>
          )}
        </div>
        <div>
          <label className="font-medium">Product Image</label>
          <input
            className="w-full p-3 mt-1 outline-none"
            {...register("img", { required: true })}
            placeholder="Enter Product Image Url"
          />
          {errors.img && (
            <span className="text-red-600 font-medium">Image is required</span>
          )}
        </div>
        <div>
          <label className="font-medium">Product Price</label>
          <input
            type="number"
            className="w-full p-3 mt-1 outline-none"
            {...register("price", { required: true })}
            placeholder="Enter Product Price"
          />
          {errors.price && (
            <span className="text-red-600 font-medium">Price is required</span>
          )}
        </div>
        <div>
          <label className="font-medium">Product Description</label>
          <input
            className="w-full p-3 mt-1 outline-none"
            {...register("description", { required: true })}
            placeholder="Enter Product Description"
          />
          {errors.description && (
            <span className="text-red-600 font-medium">
              Description is required
            </span>
          )}
        </div>

        <input
          className="inline-block px-5 py-4 text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8 md:transform md:-translate-y-2 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
