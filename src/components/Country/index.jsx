import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';


export const Country = ({ info, width = 120, height = 80 }) => {
  const { imgUrl, name } = info;

  return (
    <>
      <img
        src={imgUrl}
        width={width}
        height={height}
        alt={name}
      />

      <p className={styles.name}>{name}</p>
    </>
  );
};

export default Country;