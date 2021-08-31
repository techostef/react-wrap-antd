/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Switch } from 'antd';
import { InputNumber, Row, Col } from 'antd';
import Slider from '../Slider';

export default {
  title: 'DataEntry/Slider',
  component: Slider,
  argTypes: {
    autoFocus: argTypesEnum.BOOL_FALSE,
    defaultValue: null,
    disabled: argTypesEnum.BOOL_FALSE,
    draggableTrack: argTypesEnum.BOOL_FALSE,
    getTooltipPopupContainer: argTypesEnum.EVENTS,
    included: argTypesEnum.BOOL_FALSE,
    marks: argTypesEnum.OBJECT,
    max: argTypesEnum.NUMBER,
    min: argTypesEnum.NUMBER,
    range: argTypesEnum.BOOL_FALSE,
    reverse: argTypesEnum.BOOL_FALSE,
    step: argTypesEnum.NUMBER,
    tipFormatter: argTypesEnum.EVENTS,
    tooltipPlacement: argTypesEnum.STRING,
    tooltipVisible: null,
    vertical: argTypesEnum.BOOL_FALSE,
    onAfterChange: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    trackStyle: argTypesEnum.OBJECT,
    handleStyle: argTypesEnum.OBJECT,
  },
};

const Template = (args) => (
  <Slider
    {...args}
  />
);

export const SliderDefault = Template.bind({});
SliderDefault.args = {
};

const TemplateExampleBasic = () => {
  const [disabled, setDisabled] = useState(false)

  const handleDisabledChange = (disabled: boolean) => {
    setDisabled(disabled);
  };

  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={handleDisabledChange} />
    </>
  );
}

export const SliderExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleWithInputNumber = () => {
  const [inputValue, setInputValue] = useState(1)

  const onChange = value => {
    setInputValue(value);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
}

export const SliderExampleWithInputNumber = TemplateExampleWithInputNumber.bind({});

const TemplateExampleVertical = () => {
  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };

  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <>
      <div style={style}>
        <Slider vertical defaultValue={30} />
      </div>
      <div style={style}>
        <Slider vertical range step={10} defaultValue={[20, 50]} />
      </div>
      <div style={style}>
        <Slider vertical range marks={marks} defaultValue={[26, 37]} />
      </div>
    </>
  )

}

export const SliderExampleVertical = TemplateExampleVertical.bind({});

const TemplateExampleGraduated = () => {
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };
  
  return (
    <>
      <h4>included=true</h4>
      <Slider marks={marks} defaultValue={37} />
      <Slider range marks={marks} defaultValue={[26, 37]} />

      <h4>included=false</h4>
      <Slider marks={marks} included={false} defaultValue={37} />

      <h4>marks & step</h4>
      <Slider marks={marks} step={10} defaultValue={37} />

      <h4>step=null</h4>
      <Slider marks={marks} step={null} defaultValue={37} />
    </>
  )
}

export const SliderExampleGraduated = TemplateExampleGraduated.bind({});
