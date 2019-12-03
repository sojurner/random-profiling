import React from 'react';
import Skeleton from 'react-loading-skeleton';

import FlexBox from '~components/Flexbox';

const ProfileBackgroundSkeleton = () => (
  <Skeleton count={1} height={200} width={500} />
);

const ProfileBackground: React.FC<{ img: string }> = ({ img }) => {
  return (
    <FlexBox
      height={200}
      width={500}
      borderRadius={10}
      backgroundPosition="center center"
      backgroundSize="cover"
      backgroundImage={`url(${img})`}
    />
  );
};

export { ProfileBackgroundSkeleton, ProfileBackground as default };
