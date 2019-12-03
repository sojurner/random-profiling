import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import StepperGuide from '~components/Stepper/StepperGuide';
import Router from '~components/Router';
import StepNavActions from '~components/Stepper/StepperNavActions';

import { useStepperHook } from '~utils/hooks/stepHooks';
import { stepperRoutes } from '~routes/index';
import FlexBox from '~components/Flexbox';

const CreateUserStepList: React.FC<RouteComponentProps> = ({ history }) => {
  const [
    currentStep,
    canBack,
    canForward,
    handleNextStep,
    handlePrevStep,
    handleStepChange
  ] = useStepperHook(3);

  const pushNextPath = (index: number) => {
    const { push } = history;
    switch (index) {
      case 0:
        push('/create-profile');
        return;
      case 1:
        push('/friend-selection');
        return;
      case 2:
        push('/confirm');
        return;
      default:
        return;
    }
  };

  return (
    <FlexBox alignSelf="flex-start" flexDirection="column">
      <StepperGuide
        steps={['Create A User', 'Select Friends', 'Confirm and Run']}
        className="stepperGuide"
        currentStep={currentStep}
        handleStepChange={(index: number) => {
          handleStepChange(index);
          pushNextPath(index);
        }}
      />
      <Router routes={stepperRoutes} />
      <StepNavActions
        canBack={Boolean(canBack[currentStep])}
        canForward={Boolean(canForward[currentStep])}
        isLast={currentStep === 3}
        handleNextStep={() => {
          handleNextStep();
          pushNextPath(currentStep + 1);
        }}
        handlePrevStep={() => {
          handlePrevStep();
          history.goBack();
        }}
      />
    </FlexBox>
  );
};

export default withRouter(CreateUserStepList);
