import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader__wrap}>
    <div>
      <div className={styles.loader__bounceball}></div>
      <p className={styles.loader__text}>LOADING</p>
    </div>
  </div>
);

export default Loader;
