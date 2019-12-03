import React from 'react';

import { RadioInput, TextInput } from '~components/Inputs';
import CalendarInput from '~components/Calendar';
import FormGrid from '~components/Grids/FormGrid';
import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';

import { useProfileFormHook } from '~utils/hooks/profileFormHook';

const fullNameKey = 'fullName',
  emailKey = 'email',
  genderKey = 'gender',
  addressKey = 'address',
  dobKey = 'dob',
  phoneKey = 'phone',
  cellKey = 'cell',
  usernameKey = 'username',
  passwordKey = 'password',
  cPasswordKey = 'cPassword';

const profileInputClassFactory = (tag: string) => {
  return `profileInput__${tag}`;
};

const ProfileForm = () => {
  const [
    formValues,
    showCalendar,
    handleProfileInputChange,
    handleProfileInputError,
    handleProfileInputTouch,
    handleDateChange
  ] = useProfileFormHook();

  return (
    <FormGrid className="formGrid__profile">
      <TextInput
        className={profileInputClassFactory(fullNameKey)}
        name={fullNameKey}
        value={formValues[fullNameKey] as string}
        label="Name:"
        onChange={handleProfileInputChange}
      />
      <CalendarInput
        inputProps={{
          className: profileInputClassFactory(dobKey),
          name: dobKey,
          label: 'DOB:',
          type: 'button',
          value: `${formValues.dob}`
        }}
        calendarProps={{
          onChange: handleDateChange,
          value: formValues.dob
        }}
      />
      <FlexBox
        margin="20px 30px 20px 20px"
        borderBottom="2px solid rgba(0, 0, 0, 0.08)"
        gridArea="gender"
      >
        <Typography
          className="profileForm__gender"
          variant="h3"
          children="Gender:"
        />
        <FlexBox
          marginRight="200px"
          flex="1 1 auto"
          justifyContent="space-evenly"
        >
          <RadioInput
            className={profileInputClassFactory(genderKey)}
            name={genderKey}
            value="male"
            label="Male"
            id="maleRadio"
          />
          <RadioInput
            className={profileInputClassFactory(genderKey)}
            name={genderKey}
            value="female"
            label="Female"
            id="femaleRadio"
          />
          <RadioInput
            className={profileInputClassFactory(genderKey)}
            name={genderKey}
            value="fordF150"
            label="Ford F-150"
            id="fordRadio"
          />
        </FlexBox>
      </FlexBox>
      <TextInput
        className={profileInputClassFactory(usernameKey)}
        name={usernameKey}
        value={formValues[usernameKey] as string}
        label="Username:"
        onChange={handleProfileInputChange}
      />
      <TextInput
        className={profileInputClassFactory(emailKey)}
        name={emailKey}
        value={formValues[emailKey] as string}
        label="Email:"
        onChange={handleProfileInputChange}
      />
      <TextInput
        className={profileInputClassFactory(addressKey)}
        name={addressKey}
        value={formValues[addressKey] as string}
        label="City / Country:"
        onChange={handleProfileInputChange}
      />
      <TextInput
        className={profileInputClassFactory(phoneKey)}
        name={phoneKey}
        value={formValues[phoneKey] as string}
        label="Phone:"
        onChange={handleProfileInputChange}
      />
      <TextInput
        className={profileInputClassFactory(cellKey)}
        name={cellKey}
        value={formValues[cellKey] as string}
        label="Cell:"
        onChange={handleProfileInputChange}
      />
      <TextInput
        className={profileInputClassFactory(passwordKey)}
        name={passwordKey}
        value={formValues[passwordKey] as string}
        label="Password:"
        type="password"
        onChange={handleProfileInputChange}
      />
      <TextInput
        className={profileInputClassFactory(cPasswordKey)}
        name={cPasswordKey}
        value={formValues[cPasswordKey] as string}
        label="Confirm Password:"
        type="password"
        onChange={handleProfileInputChange}
      />
    </FormGrid>
  );
};

export default ProfileForm;
