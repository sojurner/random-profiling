import { useState, useEffect, MouseEvent } from 'react';
import { OnChangeDateCallback } from 'react-calendar';

interface IProfileForm {
  fullName: string | boolean;
  email: string | boolean;
  dob: Date | Date[] | undefined;
  gender: 'male' | 'female' | 'other' | string | boolean;
  address: string | boolean;
  username: string | boolean;
  password: string | boolean;
  cPassword: string | boolean;
  [key: string]: string | boolean | Date | Date[] | undefined;
}

type IInputEvent = (event: React.FormEvent<HTMLInputElement>) => void;

type TProfileHook = () => [
  IProfileForm,
  boolean,
  IInputEvent,
  IInputEvent,
  IInputEvent,
  OnChangeDateCallback
];

const initialStateFactory = (initialVal: string | boolean) => {
  return [
    'fullName',
    'email',
    'dob',
    'gender',
    'address',
    'username',
    'password',
    'cPassword'
  ].reduce((state: any, key) => {
    state[key] = initialVal;
    return state;
  }, {});
};

const useProfileFormHook: TProfileHook = () => {
  const [formValues, setFormValues] = useState<IProfileForm>(
    initialStateFactory('')
  );
  const [errors, setErrors] = useState<IProfileForm>(initialStateFactory(''));
  const [touched, setTouched] = useState<IProfileForm>(
    initialStateFactory(false)
  );

  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleProfileInputChange: IInputEvent = event => {
    const { name, value } = event.currentTarget;

    setFormValues(state => ({ ...state, [name]: value }));
  };

  const handleProfileInputError: IInputEvent = event => {
    const { name } = event.currentTarget;

    switch (formValues[name]) {
      case '':
        setErrors(state => ({ ...state, [name]: 'Cannot be Blank!' }));
        return;
      default:
        return;
    }
  };

  const handleProfileInputTouch: IInputEvent = event => {
    const { name } = event.currentTarget;

    setTouched(state => ({ ...state, [name]: true }));
  };

  const handleDateChange: OnChangeDateCallback = dob => {
    setFormValues(state => ({ ...state, dob }));
  };

  return [
    formValues,
    showCalendar,
    handleProfileInputChange,
    handleProfileInputError,
    handleProfileInputTouch,
    handleDateChange
  ];
};

export { useProfileFormHook };
