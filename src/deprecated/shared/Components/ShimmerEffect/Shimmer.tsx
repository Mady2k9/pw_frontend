import React from 'react';
import styles from './Shimmer.module.css';

const Shimmer = ({
  shimmerHeight,
  chontainerHeight,
}: {
  shimmerHeight: string;
  chontainerHeight: string;
}) => {
  return (
    <div className={`${styles.card} ${chontainerHeight}`}>
      <div className={`${styles.shimmerBG} ${shimmerHeight}`}></div>
    </div>
  );
};

export default Shimmer;
