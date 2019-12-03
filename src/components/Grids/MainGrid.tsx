import React from 'react';

import styles from './Grid.module.scss';

const MainGrid: React.FC = props => {
  return <main className={styles.grid__main} {...props} />;
};

export default MainGrid;
