import React from 'react';

import Typography from '~components/Typography';
import Avatar from '~components/Avatar';

import styles from './ListItem.module.scss';

interface IFriendListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  img: string;
  fullName: string;
}

const FriendListItem: React.FC<IFriendListItemProps> = ({
  img,
  fullName,
  ...props
}) => {
  return (
    <li className={styles.listItem__friend} {...props}>
      <Avatar src={img} alt={fullName} className="avatar__friendListItem" />
      <Typography variant="p" className="label__friend" children={fullName} />
    </li>
  );
};

export default FriendListItem;
