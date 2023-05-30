import React, { memo } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
const DisplayRestraunt = ({ searchedList }) => {
  return (
    <div className="card__body">
      {searchedList.length > 0 ? (
        searchedList.map((restraunt) => (
          <Link key={restraunt.data.id} to={`/restraunt/${restraunt.data.id}`}>
            <Card data={restraunt.data} />
          </Link>
        ))
      ) : (
        <h1>No Restraunt found</h1>
      )}
    </div>
  );
};

export default memo(DisplayRestraunt);
