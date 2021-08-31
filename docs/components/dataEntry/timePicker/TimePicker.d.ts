import React from 'react';
import { TimePicker as TimePickerComp, TimePickerProps } from 'antd';
interface ITimePicker extends TimePickerProps {
}
declare const TimePicker: React.FC<ITimePicker> & {
    RangePicker: typeof TimePickerComp.RangePicker;
};
export default TimePicker;
