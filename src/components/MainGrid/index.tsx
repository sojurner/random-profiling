import React from 'react';

import styles from './Grid.module.scss';

const MainGrid: React.FC<{ className: string | 'grid__main' }> = ({
  className,
  ...props
}) => {
  return <main className={styles[className]} {...props} />;
};

export default MainGrid;
