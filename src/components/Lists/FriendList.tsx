import React from 'react';
import { NavLink } from 'react-router-dom';

import Divider from '~components/Divider';
import FriendListItem from '~components/ListItems/FriendListItem';

import { IUser } from '~types/api';
import styles from './List.module.scss';

const FriendList: React.FC<{ friends: IUser[] }> = ({ friends }) => {
  return (
    <ul className={styles.list__friends}>
      {friends.map((friend, index) => (
        <NavLink
          key={`navlink-friend-${index}`}
          to={{
            pathname: `/user/${friend.userInfo.id}`,
            state: { user: friend }
          }}
          activeClassName={styles['list__friends__Item-active']}
        >
          <FriendListItem img={friend.img} fullName={friend.fullName} />
          {index !== friends.length - 1 && (
            <Divider className="divider__horizontal" />
          )}
        </NavLink>
      ))}
    </ul>
  );
};

export default FriendList;
