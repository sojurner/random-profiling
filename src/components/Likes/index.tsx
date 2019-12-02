import React from 'react';
import { Icon } from '@mdi/react';
import { mdiHeartOutline, mdiHeart } from '@mdi/js';
import FlexBox from '~components/Flexbox';

const Likes: React.FC<{ count: number; liked: boolean; onClick: any }> = ({
  count,
  liked,
  ...props
}) => {
  return (
    <span {...props}>
      <FlexBox
        alignItems="center"
        cursor="pointer"
        position="absolute"
        right={10}
        top={6}
      >
        <Icon
          color="darkred"
          size={0.7}
          path={liked ? mdiHeart : mdiHeartOutline}
        />
        <span
          style={{ fontSize: '.7em', color: 'darkred', marginLeft: 3 }}
          children={count}
        />
      </FlexBox>
    </span>
  );
};

export default Likes;
