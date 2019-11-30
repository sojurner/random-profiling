import React from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '~components/Typography';
import Divider from '~components/Divider';

import styles from './List.module.scss';
import { IUser } from '~types/api';

const FriendList: React.FC<{ friends: IUser[] }> = ({ friends }) => {
  return (
    <ul className={styles.list__friends}>
      {friends.map((friend, index) => (
        <NavLink
          to={{
            pathname: `/user/${friend.userInfo.id}`,
            state: { user: friend }
          }}
          activeClassName={styles['list__friends__Item-active']}
        >
          <li>
            <img src={friend.img} />
            <Typography
              variant="p"
              className="label__friend"
              children={friend.fullName}
            />
          </li>
          {index !== friends.length - 1 && (
            <Divider className="divider__horizontal" />
          )}
        </NavLink>
      ))}
    </ul>
  );
};

export default FriendList;
