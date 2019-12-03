import React from 'react';
import ReactCalendar, { CalendarProps } from 'react-calendar';

import FlexBox from '~components/Flexbox';
import { TextInput } from '~components/Inputs';

import './calendar.scss';
import { ITextInputProps } from '~types/input';
import ClickAwayListener from '~components/ClickAwayListener';

type ClickAwayMouseEvent = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;

interface ICalendarProps {
  inputProps: ITextInputProps;
  calendarProps: CalendarProps;
}
type BtnEvent = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Calendar: React.FC<ICalendarProps> = ({ inputProps, calendarProps }) => {
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);

  const toggleCalendar: unknown = () => {
    setShowCalendar(state => !state);
  };

  return (
    <FlexBox position="relative" gridArea="dob">
      <TextInput onClick={toggleCalendar as BtnEvent} {...inputProps} />
      {showCalendar && (
        <>
          <ReactCalendar {...calendarProps} />
          <ClickAwayListener onClick={toggleCalendar as ClickAwayMouseEvent} />
        </>
      )}
    </FlexBox>
  );
};

export default Calendar;
