import React from 'react';

import Button from '~components/Button';

import styles from './Stepper.module.scss';

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
    <footer className={styles.stepperNavActions}>
      <Button
        onClick={handlePrevStep}
        disabled={!canBack}
        children="Back"
        className="button__stepperNavActions-prev"
      />
      <Button
        onClick={handleNextStep}
        disabled={!canForward}
        children="Next"
        className="button__stepperNavActions-next"
      />
      {isLast && <Button className="" children={'Run'} />}
    </footer>
  );
};

export default StepperNavActions;
