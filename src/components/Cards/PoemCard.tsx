import React from 'react';
import styles from './Card.module.scss';
import Typography from '~components/Typography';
import FlexBox from '~components/Flexbox';

const PoemCard: React.FC<{ content: string; author: string }> = ({
  content,
  author
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <section className={styles.card__poem}>
      <Typography
        variant="h6"
        children="Latest Post"
        className="poemCard__caption"
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
    </section>
  );
};

export default PoemCard;
