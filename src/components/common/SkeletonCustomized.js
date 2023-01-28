import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCustomized = () => {
  return Array(10)
    .fill()
    .map((item, index) => {
      return (
        <div key={index}>
          <SkeletonTheme color="gray" highlightColor="white">
            <div className="skeletonn">
              <Skeleton height={350} />
            </div>
            <div className="skeletonn">
              <Skeleton height={350} />
            </div>
            <div className="skeletonn">
              <Skeleton height={350} />
            </div>
            <div className="skeletonn">
              <Skeleton height={350} />
            </div>
          </SkeletonTheme>
        </div>
      );
    });
};

export default SkeletonCustomized;
