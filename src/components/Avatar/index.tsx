import React from 'react';

import styles from './Avatar.module.scss';

interface IAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
}

const Avatar: React.FC<IAvatarProps> = ({
  className = 'avatar__base',
  ...props
}) => {
  return <img className={styles[className]} {...props} />;
};

export default Avatar;
