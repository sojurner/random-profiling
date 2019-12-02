import React from 'react';
import Typography from '~components/Typography';

import styles from './Stepper.module.scss';

interface StepperProps {
  steps: string[];
  className: string;
  currentStep: number;
  handleStepChange: (index: number) => void;
}

const StepperGuide: React.FC<StepperProps> = ({
  steps,
  currentStep,
  className,
  handleStepChange
}) => {
  const steppers = steps.map((step, index) => (
    <div
      onClick={currentStep > index ? () => handleStepChange(index) : () => {}}
      className={
        currentStep > index
          ? styles[`${className}__step-active`]
          : styles[`${className}__step`]
      }
    >
      <svg
        height="1.5em"
        width="1.5em"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
        className={
          currentStep >= index
            ? styles[`${className}__stepNumber-completed`]
            : styles[`${className}__stepNumber`]
        }
      >
        <circle cx="12" cy="12" r="12"></circle>
        <text fontSize="0.8em" fill="white" x="12" y="17" textAnchor="middle">
          {currentStep > index ? '✓' : index + 1}
        </text>
      </svg>
      <Typography
        variant="p"
        children={step}
        className={`${className}__label`}
      />
      {index !== steps.length - 1 && (
        <span
          className={
            currentStep > index
              ? styles[`${className}__link-completed`]
              : styles[`${className}__link`]
          }
        />
      )}
    </div>
  ));

  return null;
};

export default StepperGuide;
