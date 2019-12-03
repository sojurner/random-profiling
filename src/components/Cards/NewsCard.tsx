import React from 'react';
import Skeleton from 'react-loading-skeleton';

import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';

import styles from './Card.module.scss';

const newTabRedirect = (url: string) => {
  window.open(url, '_blank')!.focus();
};

export interface INewsProps {
  title: string;
  url: string;
  urlToImage: string;
  src: string;
}

const NewsCardSkeleton = () => (
  <>
    <Skeleton count={1} height={110} width={400} />
    <FlexBox height={10} />
  </>
);

const NewsCard: React.FC<INewsProps> = ({ url, urlToImage, src, title }) => (
  <section
    className={styles.card__news}
    onClick={newTabRedirect.bind(null, url)}
  >
    <img src={urlToImage} alt={src} />
    <FlexBox
      textAlign="start"
      marginLeft="1rem"
      alignSelf="center"
      paddingRight="1rem"
      flexDirection="column"
    >
      <Typography className="newsCard__title" variant="p" children={title} />
      <Typography
        className="newsCard__src"
        variant="p"
        children={`- ${src} -`}
      />
    </FlexBox>
  </section>
);

export { NewsCardSkeleton, NewsCard as default };
