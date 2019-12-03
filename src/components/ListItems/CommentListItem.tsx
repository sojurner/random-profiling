import React from 'react';

import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';

import { IUser } from '~types/api';
import Avatar from '~components/Avatar';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

interface ICommentProps {
  user: IUser;
  content: string;
}

const CommentListItem: React.FC<ICommentProps> = ({ user, content }) => {
  return (
    <li className={styles['listItem__comment-poem']}>
      <Link
        to={{
          pathname: `/user/${user.userInfo.id}`,
          state: { user }
        }}
      >
        <Avatar
          src={user.img}
          alt={user.fullName}
          className="avatar__comment"
        />
      </Link>
      <FlexBox
        maxWidth={350}
        minWidth={350}
        margin="10px 0"
        flexDirection="column"
      >
        <Link
          to={{
            pathname: `/user/${user.userInfo.id}`,
            state: { user }
          }}
        >
          <Typography
            variant="h5"
            children={user.fullName}
            className="comment__commenter"
          />
        </Link>

        <Typography
          variant="h5"
          children={content}
          className="comment__content"
        />
      </FlexBox>
    </li>
  );
};

export default CommentListItem;
