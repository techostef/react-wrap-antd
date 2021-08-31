import React from 'react';
import { Moment } from 'moment';
import { CalendarProps } from 'antd';
export declare enum CalendarMode {
    month = "month",
    year = "year"
}
interface ICalendar extends CalendarProps<Moment> {
}
declare const _default: React.NamedExoticComponent<ICalendar>;
export default _default;
