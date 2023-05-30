import React, { useState, useEffect } from "react";

import CardShimmer from "./CardShimmer";
import { Link } from "react-router-dom";
import { filter } from "../utils/helper";
import useDisplayRestrauntName from "../utils/useDisplayRestrauntName";
import useOnline from "../utils/useOnline";
import DisplayRestraunt from "./DisplayRestraunt";
const Body = () => {
  console.log("Body Render");
  const [searchedList, setSearchedList] = useState([]);
  const [searchinput, setSearchInput] = useState("");

  const restrauntData = useDisplayRestrauntName(updateSearchList);

  function updateSearchList(data) {
    setSearchedList(data);
  }

  const isOnline = useOnline();
  // console.log(isOnline);

  if (isOnline === false) {
    return <h1>OFFline</h1>;
  }

  return (
    <>
      <div className="search__component bg-slate-700">
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="search"
          type="text"
          placeholder="Search"
          value={searchinput}
        />

        <button
          onClick={() => {
            let searchOutput = filter(searchinput, restrauntData);
            setSearchedList(searchOutput);
          }}
          className="btn search--btn"
        >
          Search
        </button>
      </div>
      <div className="card__body">
        {restrauntData.length === 0 ? (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        ) : (
          <>{<DisplayRestraunt searchedList={searchedList} />}</>
        )}
      </div>
    </>
  );
};

export default Body;
