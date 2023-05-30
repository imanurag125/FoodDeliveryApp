import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
const CardShimmer = () => {
  return (
    <SkeletonTheme baseColor="#fff" highlightColor="#bab7b8">
      <div className="card ">
        <Skeleton width={256} height={160} />

        <h2 className="name">{<Skeleton />}</h2>
        <h3 className="cuisines">{<Skeleton />}</h3>
        <h4 className="deliver__time">
          <Skeleton />
        </h4>
      </div>
    </SkeletonTheme>
  );
};

export default CardShimmer;
