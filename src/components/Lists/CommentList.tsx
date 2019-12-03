import React from 'react';

import CommentListItem from '~components/ListItems/CommentListItem';

import styles from './List.module.scss';
import { IUser } from '~types/api';

interface ICommentListProps extends React.HTMLAttributes<HTMLUListElement> {
  comments: string[];
  commenters: IUser[];
}

const CommentList: React.FC<ICommentListProps> = ({ comments, commenters }) => {
  return (
    <ul className={styles['list__comments-poem']}>
      {comments.map((comment, index) => (
        <CommentListItem user={commenters[index]} content={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
