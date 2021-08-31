/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Affix from '../Affix';
import { Button } from 'antd';
import argTypesEnum from '../../../../enums/argTypesEnum';

export default {
  title: 'Navigation/Affix',
  component: Affix,
  argTypes: {
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    offsetTop: argTypesEnum.NUMBER,
    offsetBottom: argTypesEnum.NUMBER,
    onChange: argTypesEnum.EVENTS,
    target: argTypesEnum.EVENTS,
  },
};

const TemplateAffix = (args) => (
  <Affix
    {...args}
  />
);

const TemplateAffixWithState = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

const TemplateAffixWithTarget = () => {
  // const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};

export const AffixSetTop = TemplateAffix.bind({});
AffixSetTop.args = {
  offsetTop: 10,
  children: <Button
  htmlType="button"
  onClick={() => {}}
  shape="round"
  size="middle"
  type="default"
>
  Text
</Button>,
};

export const AffixSetBottom = TemplateAffix.bind({});
AffixSetBottom.args = {
  offsetBottom: 10,
  children: <Button
  htmlType="button"
  onClick={() => {}}
  shape="round"
  size="middle"
  type="default"
>
  Text
</Button>,
};

export const AffixWithStateExample = TemplateAffixWithState.bind({});

export const AffixWithOnChange = TemplateAffix.bind({});
AffixWithOnChange.args = {
  offsetTop: 120,
  onChange:affixed => console.log(affixed),
  children: <Button
  htmlType="button"
  onClick={() => {}}
  shape="round"
  size="middle"
  type="default"
>
  Text
</Button>,
};

export const AffixWithTarget = TemplateAffixWithTarget.bind({});
