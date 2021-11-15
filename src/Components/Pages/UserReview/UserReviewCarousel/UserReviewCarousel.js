import React from "react";
import Rating from "react-rating";
import dummyImg from "../../../Images/icons/user.png";

const UserReviewCarousel = ({ review }) => {
  const { textarea, userImg, name, companyName, rating } = review;
  console.log(rating);
  return (
    <div
      className="flex items-center justify-center px-5"
      style={{ marginTop: "50px", paddingBottom: "20px" }}
    >
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: "400px" }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img src={userImg ? userImg : dummyImg} alt={name} />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">{textarea}</p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <Rating
          classNameName="text-yellow-400 text-xl"
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          initialRating={rating}
          readonly
        />
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            {name}
          </p>
          <p className="text-xs text-gray-500 text-center">{companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReviewCarousel;
