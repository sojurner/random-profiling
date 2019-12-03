import { useState } from 'react';

type TakeNoneGiveNone = () => void;

type TakeNumGiveNone = (index: number) => void;

function useStepperHook(
  stepCount: number
): [
  number,
  boolean[],
  boolean[],
  TakeNoneGiveNone,
  TakeNoneGiveNone,
  TakeNumGiveNone
] {
  const [currentStep, setCurrentStep] = useState(0);
  const [canBack, setCanBack] = useState(
    Array.from({ length: stepCount }, (v, i) => (Boolean(i) ? true : false))
  );
  const [canForward, setCanForward] = useState(
    Array.from({ length: stepCount }, (v, i) =>
      i === stepCount - 1 ? false : true
    )
  );

  const handleNextStep: TakeNoneGiveNone = () => {
    setCurrentStep(state => state + 1);
  };

  const handleStepChange: TakeNumGiveNone = stepIndex => {
    setCurrentStep(stepIndex);
  };

  const handlePrevStep: TakeNoneGiveNone = () => {
    setCurrentStep(state => state - 1);
  };

  return [
    currentStep,
    canBack,
    canForward,
    handleNextStep,
    handlePrevStep,
    handleStepChange
  ];
}

export { useStepperHook };
