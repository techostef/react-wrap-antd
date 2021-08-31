import React from 'react';
import { DatePicker as DatePickerComp } from 'antd';
import { Moment } from 'moment';
import { SizeEnum } from '../../../enums/dataEnum';

declare type Locale = {
  locale: string;
  /** Display month before year in date panel header */
  monthBeforeYear?: boolean;
  yearFormat: string;
  monthFormat?: string;
  quarterFormat?: string;
  today: string;
  now: string;
  backToToday: string;
  ok: string;
  timeSelect: string;
  dateSelect: string;
  weekSelect?: string;
  clear: string;
  month: string;
  year: string;
  previousMonth: string;
  nextMonth: string;
  monthSelect: string;
  yearSelect: string;
  decadeSelect: string;
  dayFormat: string;
  dateFormat: string;
  dateTimeFormat: string;
  previousYear: string;
  nextYear: string;
  previousDecade: string;
  nextDecade: string;
  previousCentury: string;
  nextCentury: string;
  shortWeekDays?: string[];
  shortMonths?: string[];
};
interface TimePickerLocale {
  placeholder?: string;
  rangePlaceholder?: [string, string];
}
declare type PickerLocale = {
    lang: Locale & AdditionalPickerLocaleLangProps;
    timePickerLocale: TimePickerLocale;
} & AdditionalPickerLocaleProps;
declare type AdditionalPickerLocaleProps = {
    dateFormat?: string;
    dateTimeFormat?: string;
    weekFormat?: string;
    monthFormat?: string;
};
declare type AdditionalPickerLocaleLangProps = {
    placeholder: string;
    yearPlaceholder?: string;
    quarterPlaceholder?: string;
    monthPlaceholder?: string;
    weekPlaceholder?: string;
    rangeYearPlaceholder?: [string, string];
    rangeMonthPlaceholder?: [string, string];
    rangeWeekPlaceholder?: [string, string];
    rangePlaceholder?: [string, string];
};

interface IDatePicker {
  allowClear?: boolean,
  autoFocus?: boolean,
  bordered?: boolean,
  className?: string,
  dateRender?: ((currentDate: Moment, today: Moment) => React.ReactNode),
  defaultPickerValue?: Moment,
  defaultValue?: Moment,
  disabled?: boolean,
  disabledDate?: ((currentDate: Moment) => boolean),
  disabledTime?: ((currentDate: Moment) => boolean) | ((currentDate: Moment) => Object),
  dropdownClassName?: string,
  format?: string | ((value: Moment) => string) | (string | ((value: Moment) => string))[],
  getPopupContainer?: ((trigger: HTMLElement) => HTMLElement),
  inputReadOnly?: boolean,
  locale?: PickerLocale,
  mode?: keyof typeof DatePickerMode,
  open?: boolean,
  panelRender?: ((panelNode: React.ReactNode) => React.ReactNode),
  picker?: keyof typeof DatePickerPicker,
  placeholder?: string,
  popupStyle?: React.CSSProperties,
  size?: keyof typeof SizeEnum,
  showNow?: boolean,
  showTime?: object | boolean,
  showToday?: boolean,
  suffixIcon?: React.ReactNode,
  onChange?: ((date: Moment, dateString: string) => void),
  onOk?: (() => void),
  onOpenChange?: ((open: boolean) => void),
  onPanelChange?: ((value: Moment, mode: keyof typeof PanelMode) => void),
  renderExtraFooter?: (mode: keyof typeof PanelMode) => React.ReactNode,
  value?: Moment,
}

export enum DatePickerMode {
  time = 'time', 
  date = 'date',
  month = 'month', 
  year = 'year',
  decade = 'decade'
}

export enum PanelMode {
  time = 'time', 
  date = 'date', 
  week = 'week', 
  month = 'month', 
  quarter = 'quarter', 
  year = 'year', 
  decade = 'decade'
}

export enum DatePickerPicker {
  time = 'time',
  date = 'date',
  week = 'week',
  month = 'month', 
  quarter = 'quarter',
  year = 'year'
}

const DatePicker: React.FC<IDatePicker> & {
  WeekPicker: typeof DatePickerComp.WeekPicker,
  MonthPicker: typeof DatePickerComp.MonthPicker,
  YearPicker: typeof DatePickerComp.YearPicker,
  RangePicker: typeof DatePickerComp.RangePicker,
  TimePicker: typeof DatePickerComp.TimePicker,
  QuarterPicker: typeof DatePickerComp.QuarterPicker,
} = ({children, picker, ...props}) => {

  return (
    <DatePickerComp
      {...props}
      picker={picker as "time"}
      size={props.size}
    >
      { children }
    </DatePickerComp>
  );
};

DatePicker.WeekPicker = DatePickerComp.WeekPicker;
DatePicker.MonthPicker = DatePickerComp.MonthPicker;
DatePicker.YearPicker = DatePickerComp.YearPicker;
DatePicker.RangePicker = DatePickerComp.RangePicker;
DatePicker.TimePicker = DatePickerComp.TimePicker;
DatePicker.QuarterPicker = DatePickerComp.QuarterPicker;

export default DatePicker;
