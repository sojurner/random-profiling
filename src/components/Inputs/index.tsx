import React from 'react';

import FlexBox from '~components/Flexbox';

import { IInputProps, IRadioInputProps, ITextInputProps } from '~types/input';
import styles from './Input.module.scss';

const Input: React.FC<IInputProps> = ({ className = '', ...props }) => {
  return <input className={styles[className]} {...props} />;
};

const RadioInput: React.FC<IRadioInputProps> = ({ label, ...props }) => (
  <FlexBox cursor="pointer" margin="2.5px 0" alignItems="center">
    <Input type="radio" {...props} />
    <label htmlFor={props.id}>{label}</label>
  </FlexBox>
);

const TextInput: React.FC<ITextInputProps> = ({
  label,
  className,
  ...props
}) => (
  <div className={styles[className]}>
    <label htmlFor={props.id} children={label} />
    <Input {...props} />
  </div>
);

export { RadioInput, TextInput, Input as default };
