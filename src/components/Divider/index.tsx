import React from 'react';

import styles from './Divider.module.scss';

const Divider: React.FC<{
  className: 'divider__vertical' | 'divider__horizontal';
}> = ({ className }) => {
  return <div className={styles[className]} />;
};

export default Divider;
