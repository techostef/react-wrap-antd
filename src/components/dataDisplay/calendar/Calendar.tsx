import React from 'react';
import { Moment } from 'moment';
import { Calendar as CalendarComp, CalendarProps } from 'antd';

export enum CalendarMode {
  month = 'month',
  year = 'year',
}

interface ICalendar extends CalendarProps<Moment>{}

const Calendar: React.FC<ICalendar> = (props) => {
  return (
    <CalendarComp {...props} />
  );
};

export default React.memo(Calendar);

