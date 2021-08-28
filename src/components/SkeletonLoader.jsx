import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  const loaders = [];
  for (let index = 0; index < 8; index += 1) {
    loaders.push(<Skeleton width="100%" height={100} />);
  }
  return <div className="skeleton-loader">{loaders}</div>;
};

export default SkeletonLoader;
