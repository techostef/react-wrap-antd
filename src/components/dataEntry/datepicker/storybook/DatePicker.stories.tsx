/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Space } from 'antd';
import moment from 'moment';
import DatePicker, { DatePickerMode, DatePickerPicker } from '../DatePicker';
import { SizeEnum } from '../../../../enums/dataEnum';

export default {
  title: 'DataEntry/DatePicker',
  component: DatePicker,
  argTypes: {
    allowClear: argTypesEnum.BOOL_TRUE,
    autoFocus: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    className: argTypesEnum.STRING,
    dateRender: argTypesEnum.EVENTS,
    defaultPickerValue: null,
    defaultValue: null,
    disabled: argTypesEnum.BOOL_FALSE,
    disabledDate: argTypesEnum.EVENTS,
    disabledTime: argTypesEnum.EVENTS,
    dropdownClassName: argTypesEnum.STRING,
    format: null,
    getPopupContainer: argTypesEnum.EVENTS,
    inputReadOnly: argTypesEnum.BOOL_FALSE,
    locale: null,
    mode: argTypesEnum.RADIO({
      defaultValue: DatePickerMode.date,
      options: DatePickerMode
    }),
    open: argTypesEnum.BOOL_FALSE,
    panelRender: argTypesEnum.EVENTS,
    picker: argTypesEnum.RADIO({
      defaultValue: DatePickerPicker.date,
      options: DatePickerPicker
    }),
    placeholder: argTypesEnum.STRING,
    popupStyle: argTypesEnum.OBJECT,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum
    }),
    showNow: argTypesEnum.BOOL_FALSE,
    showTime: null,
    showToday: argTypesEnum.BOOL_TRUE,
    suffixIcon: null,
    onChange: argTypesEnum.EVENTS,
    onOk: argTypesEnum.EVENTS,
    onOpenChange: argTypesEnum.EVENTS,
    onPanelChange: argTypesEnum.EVENTS,
    renderExtraFooter: argTypesEnum.EVENTS,
    value: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <DatePicker
    {...args}
  />
);

export const DatePickerDefault = Template.bind({});
DatePickerDefault.args = {
  children: 'Text',
};

const TemplateExampleBasic = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Space>
  )
}

export const DatePickerExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleRange = () => {
  const { RangePicker } = DatePicker;
  return (
    <Space direction="vertical" size={12}>
      <RangePicker />
      <RangePicker showTime />
      <RangePicker picker="week" />
      <RangePicker picker="month" />
      <RangePicker picker="year" />
    </Space>
  )
}

export const DatePickerExampleRange = TemplateExampleRange.bind({});

const TemplateExampleDisabled = () => {
  const { RangePicker } = DatePicker;

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
      />
      <DatePicker picker="month" disabledDate={disabledDate} />
      <RangePicker disabledDate={disabledDate} />
      <RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
        }}
        format="YYYY-MM-DD HH:mm:ss"
      />
    </Space>
  )
}

export const DatePickerExampleDisabled = TemplateExampleDisabled.bind({});
