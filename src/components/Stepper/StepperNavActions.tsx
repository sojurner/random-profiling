import React from 'react';

import Button from '~components/Button';

interface IStepNavActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  canBack: boolean;
  canForward: boolean;
  isLast: boolean;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const StepperNavActions: React.FC<IStepNavActionsProps> = ({
  handleNextStep,
  handlePrevStep,
  canBack,
  canForward,
  isLast
}) => {
  return (
    <footer>
      <Button
        onClick={handlePrevStep}
        disabled={!canBack}
        children="back"
        className="stepper__prev-btn"
      />
      <Button
        onClick={handleNextStep}
        disabled={!canForward}
        children="next"
        className="stepper__next-btn"
      />
      {isLast && <Button className="" children={'Run'} />}
    </footer>
  );
};

export default StepperNavActions;
