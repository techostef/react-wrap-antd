import React from 'react';
import { TimePicker as TimePickerComp, TimePickerProps } from 'antd';

interface ITimePicker extends TimePickerProps {
}

const TimePicker: React.FC<ITimePicker> & {
  RangePicker: typeof TimePickerComp.RangePicker,
} = ({children, ...props}) => {

  return (
    <TimePickerComp
      {...props}
    />
  );
};

TimePicker.RangePicker = TimePickerComp.RangePicker;

export default TimePicker;
