import React, { createElement } from 'react';
import styles from './Typography.module.scss';

export interface ITypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: string;
  className: string;
  children: string | number;
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
