import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Skeleton from 'react-loading-skeleton';

import FlexBox from '~components/Flexbox';
import PoemCard from '~components/Cards/PoemCard';
import CategoryHeader from '~components/Headers/CategoryHeader';

import { usePoemistApiHook } from '~utils/hooks';
import { IPoem } from '~api/poemist';

const PoemPosts: React.FC<RouteComponentProps> = ({ match }) => {
  const [poems, loading] = usePoemistApiHook(match.url) as [IPoem[], boolean];

  return poems && !loading ? (
    <FlexBox gridArea="poems" flexWrap="wrap">
      <CategoryHeader children="Posts" style={{ margin: '10px 0 -2px 0' }} />
      {poems.map(poem => (
        <PoemCard content={poem.content} author={poem.poet} />
      ))}
    </FlexBox>
  ) : (
    <FlexBox margin="20px 0" flexDirection="column" gridArea="poems">
      <Skeleton count={1} height={150} />
      <Skeleton count={1} height={150} />
      <Skeleton count={1} height={150} />
      <Skeleton count={1} height={150} />
    </FlexBox>
  );
};

export default withRouter(PoemPosts);
