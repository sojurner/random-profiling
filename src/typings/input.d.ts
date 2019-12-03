export interface IInputProps extends React.InputHTMLAttributes<{}> {
  className?: string;
}

export interface IRadioInputProps extends IInputProps {
  label: string;
}

export interface ITextInputProps extends IInputProps {
  label: string;
  className: string;
}
