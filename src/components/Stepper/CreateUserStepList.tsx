import React from 'react';

import StepperGuide from '~components/Stepper/StepperGuide';
import Router from '~components/Router';
import StepNavActions from '~components/Stepper/StepperNavActions';

import { useStepperHook } from '~utils/hooks/stepHooks';
import { stepperRoutes } from '~routes/index';

const CreateUserStepList = () => {
  const [
    currentStep,
    canBack,
    canForward,
    handleNextStep,
    handlePrevStep,
    handleStepChange
  ] = useStepperHook(3);

  return (
    <>
      <StepperGuide
        steps={['Create A User', 'Select Friends', 'Confirm and Run']}
        className="stepperGuide"
        currentStep={currentStep}
        handleStepChange={handleStepChange}
      />
      <Router routes={stepperRoutes} />
      <StepNavActions
        canBack={Boolean(canBack[currentStep])}
        canForward={Boolean(canForward[currentStep])}
        isLast={currentStep === 3}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </>
  );
};

export default CreateUserStepList;
