import React from 'react';

import Loader from '~components/Loader';
import GreetingHeader from '~components/Headers/GreetingHeader';
import Button from '~components/Button';

import { useSequenceHook } from '~utils/hooks/sequenceHook';
import CreateUserStepList from '~components/Stepper/CreateUserStepList';

const InitialSequence = () => {
  const [sequence, nextSequence] = useSequenceHook(2);

  switch (sequence) {
    case 2:
      return <Loader />;

    case 1:
      return (
        <GreetingHeader>
          <Button
            onClick={nextSequence}
            className="button__sequence-getStarted"
            children="Get Started"
          />
        </GreetingHeader>
      );
    case 0:
      return <CreateUserStepList />;
    default:
      return null;
  }
};

export default InitialSequence;
