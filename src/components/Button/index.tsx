import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<{}> {
  className: string;
}

const Button: React.FC<IButtonProps> = ({ className, ...props }) => {
  return <button className={styles[className]} {...props} />;
};

export default Button;
