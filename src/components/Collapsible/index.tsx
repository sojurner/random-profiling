import React, { HTMLAttributes } from 'react';

import styles from './Collapsible.module.scss';

interface ICollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  collapsed: boolean;
}

/* 
  description: wrapper to collapse children elements
  
  props: collapsed - boolean to toggle collapsed styles
*/

const Collapsible: React.FC<ICollapsibleProps> = ({ collapsed, ...props }) => {
  return (
    <div
      className={
        collapsed
          ? `${styles['collapsible-close']} ${styles['collapsible']}`
          : `${styles['collapsible-open']} ${styles['collapsible']}`
      }
      {...props}
    />
  );
};

export default Collapsible;
