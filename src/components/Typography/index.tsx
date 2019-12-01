import React, { createElement } from 'react';
import styles from './Typography.module.scss';

export interface ITypographyProps {
  variant: string;
  className: string;
  children: string;
}

const Typography: React.FC<ITypographyProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return createElement(
    variant,
    { ...props, className: styles[className] },
    children
  );
};

export default Typography;
