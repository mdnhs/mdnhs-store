import React from "react";
import { Link } from "react-router-dom";

const SingleItemExplore = ({ drone, handleCart }) => {
  const { name, img, description, price, _id } = drone;
  return (
    <div className="max-w-lg my-1">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="text-gray-900 font-bold text-2xl text-left tracking-tight mb-2">
              {name}
            </h5>
          </a>
          <p className="font-normal text-left text-gray-700 mb-3">{description}</p>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight text-left mb-2">
            Price: ${price}
          </h5>
          <Link to={`/purchase/${_id}`}>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mx-2 text-center inline-flex items-center"
              href="/"
            >
              Read Details
            </a>
          </Link>
          <a
            onClick={() => handleCart(drone)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mx-2 text-center inline-flex items-center"
            href="/"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleItemExplore;
