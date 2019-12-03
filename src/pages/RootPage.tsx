import React from 'react';
import FlexBox from '~components/Flexbox';
import InitialSequence from '~components/InitialSequence';

const RootPage: React.FC = () => {
  return (
    <FlexBox
      gridArea="2 / 1 / 6 / 6"
      justifyContent="center"
      alignItems="center"
    >
      <InitialSequence />
    </FlexBox>
  );
};

export default RootPage;
