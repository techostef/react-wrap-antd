/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Calendar, { CalendarMode } from '../Calendar';
import { Alert, Badge, Select, Radio, Col, Row, Typography } from 'antd';
import moment from 'moment';

export default {
  title: 'DataDisplay/Calendar',
  component: Calendar,
  argTypes: {
    className: argTypesEnum.STRING,
    danger: argTypesEnum.BOOL_FALSE,
    dataTestId: argTypesEnum.STRING,
    dateCellRender: argTypesEnum.EVENTS,
    dateFullCellRender: argTypesEnum.EVENTS,
    defaultValue: null,
    fullScreen: argTypesEnum.BOOL_TRUE,
    headerRender: argTypesEnum.EVENTS,
    locale: argTypesEnum.OBJECT,
    mode: argTypesEnum.RADIO ({
      defaultValue: CalendarMode.month,
      options: CalendarMode,
    }),
    monthCellRender: argTypesEnum.EVENTS,
    monthFullCellRender: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    onPanelChange: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
    validRange: null,
    value: null,
  },
};

const Template = (args) => (
  <Calendar
    {...args}
  />
);

const TemplateCalendarWithNotice = () => {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  
  const eventsStyle = {
    margin: 0,
    padding: 0,
    listStyleType: "none" ,
  }
  
  const notesMonthStyle = {
    width: "100%",
    overflow: "hidden",
    fontSize: "12px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }
  
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul style={eventsStyle}>
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div style={notesMonthStyle}>
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  
  return (
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  )
}

const TemplateCalendarInCard = () => {
  const styleCalendarDemoCard = {
    width: "300px",
    borderRadius: "2px",
    border: "1px solid #f0f0f0",
  }
  
  return (
    <div style={styleCalendarDemoCard}>
      <Calendar fullscreen={false} onPanelChange={() => {}} />
    </div>
  )
}

const TemplateSelectableCalendar = () => {
  const [value, setValue] = useState(moment('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(moment('2017-01-25'));
  
  const onSelect = (value) => {
    setValue(value);
    setSelectedValue(value);
  }
  
  const onPanelChange = (value) => {
    setValue(value);
  }
  
  return (
    <>
    <Alert
        message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
      />
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  )
}

const TemplateCalendarCustomHeader = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  
  return (
    <div className="site-calendar-customize-header-wrapper">
    <Calendar
      fullscreen={false}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        const start = 0;
        const end = 12;
        const monthOptions = [];

        const current = value.clone();
        const localeData = value.localeData();
        const months = [];
        for (let i = 0; i < 12; i++) {
          current.month(i);
          months.push(localeData.monthsShort(current));
        }

        for (let index = start; index < end; index++) {
          monthOptions.push(
            <Select.Option className="month-item" key={`${index}`}>
              {months[index]}
            </Select.Option>,
          );
        }
        const month = value.month();

        const year = value.year();
        const options = [];
        for (let i = year - 10; i < year + 10; i += 1) {
          options.push(
            <Select.Option key={i} value={i} className="year-item">
              {i}
            </Select.Option>,
          );
        }
        return (
          <div style={{ padding: 8 }}>
            <Typography.Title level={4}>Custom header</Typography.Title>
            <Row gutter={8}>
              <Col>
                <Radio.Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                  <Radio.Button value="month">Month</Radio.Button>
                  <Radio.Button value="year">Year</Radio.Button>
                </Radio.Group>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  onChange={newYear => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                  value={String(year)}
                >
                  {options}
                </Select>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  onChange={selectedMonth => {
                    const newValue = value.clone();
                    newValue.month(parseInt(selectedMonth, 10));
                    onChange(newValue);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
            </Row>
          </div>
        );
      }}
      onPanelChange={onPanelChange}
    />
    </div>
  )
}

export const CalendarDefault = Template.bind({});
export const CalendarWithNotice = TemplateCalendarWithNotice.bind({});
export const CalendarInCard = TemplateCalendarInCard.bind({});
export const CalendarSelectable = TemplateSelectableCalendar.bind({});
export const CalendarWithCustomizeHeader = TemplateCalendarCustomHeader.bind({});