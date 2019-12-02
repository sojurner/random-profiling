import React from 'react';

import Typography from '~components/Typography';
import Divider from '~components/Divider';
import CommentList from '~components/Lists/CommentList';
import Likes from '~components/Likes';

import { monthNames } from '~utils/date';
import { useKanyeApiHook, useRandomUsersApiHook } from '~utils/hooks/apiHooks';
import styles from './Card.module.scss';

type TakeBoolGiveNone = (arg: boolean) => void;

const PoemCard: React.FC<{ content: string; author: string; date: Date }> = ({
  content,
  author,
  date
}) => {
  const [likesCounter, setLikesCounter] = React.useState<number>(
    Math.ceil(Math.random() * 6)
  );
  const [liked, setLiked] = React.useState<boolean>(false);
  const [
    comments,
    commentsLoading,
    collapsedComments,
    handleCommentsToggle
  ] = useKanyeApiHook(likesCounter) as [
    string[],
    boolean,
    boolean,
    TakeBoolGiveNone
  ];

  const [users] = useRandomUsersApiHook(likesCounter);

  const handleLikeClick = () => {
    liked
      ? setLikesCounter(state => state - 1)
      : setLikesCounter(state => state + 1);

    setLiked(state => !state);
  };

  return (
    <article className={styles.card__poem}>
      <Likes onClick={handleLikeClick} liked={liked} count={likesCounter + 9} />
      <Typography
        variant="h6"
        children={`${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`}
        className="poemCard__caption-date"
      />
      <Typography
        variant="p"
        children={content}
        className="poemCard__content"
      />
      <Typography
        variant="h5"
        children={`- ${author}`}
        className="poemCard__author"
      />

      <Typography
        variant="h6"
        children={`Comments (${comments.length})`}
        className="poemCard__caption-commentsCount"
        onClick={handleCommentsToggle.bind(null, false)}
      />
      {!collapsedComments && (
        <>
          <Divider className="divider__horizontal-poemPost" />
          <CommentList comments={comments} commenters={users}></CommentList>
        </>
      )}
    </article>
  );
};

export default PoemCard;
