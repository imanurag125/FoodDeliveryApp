import React from "react";
import { IMG_CDN_URL } from "../config";
const Card = ({ data }) => {
  console.log("Card Render");
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${data.cloudinaryImageId}`} alt="" />

      <h3 className="name">{data.name}</h3>
      <h4 className="cuisines">{data.cuisines.join(" ")}</h4>
      <h5 className="deliver__time">
        Deliver Time:<span> {data.deliveryTime}</span>
      </h5>
    </div>
  );
};

export default Card;
