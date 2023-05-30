import React from "react";
// import { IMG_CDN_URL } from "../config";
// import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, category, imageId, description }) => {
  return (
    <div className="px-4 py-3 shadow-md w-[200px]">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
        alt=""
      />
      <h2 className="font-semibold">Name:{name} </h2>
      <h2>{category} </h2>
      {/* <h2>{description} </h2> */}
    </div>
  );
};

export default FoodItem;
