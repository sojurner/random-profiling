import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Loader from '~components/Loader';
import GreetingHeader from '~components/Headers/GreetingHeader';
import Button from '~components/Button';

import { useSequenceHook } from '~utils/hooks/sequenceHook';
import CreateUserStepList from '~components/Stepper/CreateUserStepList';

const InitialSequence: React.FC<RouteComponentProps> = ({ history }) => {
  const [sequence, nextSequence, pushPath] = useSequenceHook(2);

  switch (sequence) {
    case 2:
      return <Loader />;

    case 1:
      return (
        <GreetingHeader>
          <Button
            onClick={() => {
              nextSequence(null);
              pushPath(history);
            }}
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

export default withRouter(InitialSequence);
