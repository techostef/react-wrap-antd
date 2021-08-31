/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import moment from 'moment';
import TimePicker from '../TimePicker';

export default {
  title: 'DataEntry/TimePicker',
  component: TimePicker,
  argTypes: {
    allowClear: argTypesEnum.BOOL_TRUE,
    autoFocus: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    className: argTypesEnum.STRING,
    clearIcon: null,
    clearText: argTypesEnum.STRING,
    defaultValue: null,
    disabled: argTypesEnum.BOOL_FALSE,
    disabledHours: argTypesEnum.EVENTS,
    disabledMinutes: argTypesEnum.EVENTS,
    disabledSeconds: argTypesEnum.EVENTS,
    format: argTypesEnum.STRING,
    getPopupContainer: argTypesEnum.EVENTS,
    hideDisabledOptions: argTypesEnum.BOOL_FALSE,
    hourStep: argTypesEnum.NUMBER,
    inputReadOnly: argTypesEnum.BOOL_FALSE,
    minuteStep: argTypesEnum.NUMBER,
    open: argTypesEnum.BOOL_FALSE,
    placeholder: argTypesEnum.STRING,
    popupClassName: argTypesEnum.STRING,
    popupStyle: argTypesEnum.OBJECT,
    renderExtraFooter: argTypesEnum.EVENTS,
    secondStep: argTypesEnum.NUMBER,
    showNow: argTypesEnum.BOOL_FALSE,
    suffixIcon: null,
    use12Hours: argTypesEnum.BOOL_FALSE,
    value: null,
    onChange: argTypesEnum.EVENTS,
    onOpenChange: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <TimePicker
    {...args}
  />
);

export const TimePickerDefault = Template.bind({});
TimePickerDefault.args = {
  children: 'Text',
};

const TemplateExampleHourAndMinute = () => {

  const format = 'HH:mm';

  return (
    <TimePicker defaultValue={moment('12:08', format)} format={format} />
  )
}

export const TimePickerExample = TemplateExampleHourAndMinute.bind({});

