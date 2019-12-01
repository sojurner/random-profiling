import React from 'react';

import NewsCard, {
  NewsCardSkeleton,
  INewsProps
} from '~components/Cards/NewsCard';
import FlexBox from '~components/Flexbox';
import { useNewsApiHook } from '~utils/hooks';
import Typography from '~components/Typography';
import CategoryHeader from '~components/Headers/CategoryHeader';

const NewsFeed = () => {
  const [news, loading] = useNewsApiHook() as [INewsProps[], boolean];

  return news && !loading ? (
    <FlexBox
      flexDirection="column"
      margin="0 auto"
      padding="30px 50px 0 0"
      borderRadius="0.5rem"
    >
      <CategoryHeader children="Latest News" />
      {news.map((newsArticle: INewsProps, index: number) => (
        <NewsCard key={`newsCard-${index}`} {...newsArticle} />
      ))}
    </FlexBox>
  ) : (
    <FlexBox
      flexDirection="column"
      padding="30px 50px 0 0"
      borderRadius="0.5rem"
    >
      <NewsCardSkeleton />
      <NewsCardSkeleton />
      <NewsCardSkeleton />
      <NewsCardSkeleton />
      <NewsCardSkeleton />
    </FlexBox>
  );
};

export default NewsFeed;
