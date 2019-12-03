import React from 'react';

import styles from './Grid.module.scss';

interface IFormGridProps extends React.FormHTMLAttributes<{}> {
  className: string;
}

const FormGrid: React.FC<IFormGridProps> = ({ className, ...props }) => (
  <form className={styles[className]} {...props} />
);

export default FormGrid;
