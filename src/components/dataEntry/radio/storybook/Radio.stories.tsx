/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';

import Radio from '../Radio';

export default {
  title: 'DataEntry/Radio/Radio',
  component: Radio,
  argTypes: {
    autoFocus: argTypesEnum.BOOL_FALSE,
    checked: argTypesEnum.BOOL_FALSE,
    defaultChecked: argTypesEnum.BOOL_FALSE,
    disabled: argTypesEnum.BOOL_FALSE,
    value: null,
  },
};

const Template = (args) => (
  <Radio
    {...args}
  />
);

export const RadioDefault = Template.bind({});
RadioDefault.args = {
  children: 'Text',
};

const TemplateExampleGroup = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
}

export const RadioExampleGroup = TemplateExampleGroup.bind({});

const TemplateExampleDisabled = () => {
  const [disabled, setDisabled] = React.useState(true);


  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Radio.Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Radio.Button>
    </>
  );
};

export const RadioExampleDisabled = TemplateExampleDisabled.bind({});
