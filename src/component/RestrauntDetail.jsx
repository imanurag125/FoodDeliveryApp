import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../config";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import CardShimmer from "./CardShimmer";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const RestrauntDetail = () => {
  const dispatch = useDispatch();
  function handleClick(item) {
    dispatch(addItem(item));
  }

  const { id } = useParams();
  const restrauntDetail = useRestrauntMenu(id);
  if (restrauntDetail === null) return;
  const restrauntInfoDetail = restrauntDetail[0].card.card.info;
  const restrauntMenuDetails =
    restrauntDetail[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return restrauntDetail === null ? (
    <>
      {new Array(10).fill(" ").map((ele, id) => (
        <CardShimmer key={id} />
      ))}
    </>
  ) : (
    <>
      <div className="restraunts__detail">
        {restrauntInfoDetail.cloudinaryImageId && (
          <img src={`${IMG_CDN_URL}${restrauntInfoDetail.cloudinaryImageId}`} />
        )}
        <h1> {restrauntInfoDetail.id} </h1>
        <h2> {restrauntInfoDetail.name} </h2>
        <h2> {restrauntInfoDetail.city} </h2>

        {restrauntMenuDetails?.map((ele) => {
          const { id, imageId, name, category } = ele?.card?.info;
          return (
            <div key={id} className="m-10">
              {imageId && (
                <img
                  className="w-48 h-44 object-cover"
                  src={`${IMG_CDN_URL}${imageId}`}
                  alt=""
                />
              )}
              <h2>{name} </h2>
              <h2>{category} </h2>
              <button
                onClick={() => handleClick(ele?.card?.info)}
                className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold rounded-md"
              >
                Add Items
              </button>

              <button
                onClick={() => dispatch(removeItem(id))}
                className="px-5 mx-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold rounded-md"
              >
                Remove Items
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestrauntDetail;
