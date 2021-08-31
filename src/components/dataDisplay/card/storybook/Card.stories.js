/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Card, { CardSize } from '../Card';

export default {
  title: 'DataDisplay/Card',
  component: Card,
  argTypes: {
    actions: argTypesEnum.ARRAY,
    activeTabKey: argTypes.STRING,
    bodyStyle: argTypesEnum.OBJECT,
    bordered: argTypesEnum.BOOL_TRUE,
    className: argTypesEnum.STRING,
    cover: null,
    dataTestId: argTypesEnum.STRING,
    defaultActiveTabKey: argTypesEnum.STRING,
    extra: null,
    headStyle: argTypesEnum.OBJECT,
    hoverable: argTypesEnum.BOOL_FALSE,
    loading: argTypesEnum.BOOL_FALSE,
    onTabChange: argTypesEnum.EVENTS,
    size: argTypesEnum.RADIO({
      defaultValue: CardSize.default,
      options: CardSize,
    }),
    tabBarExtraContent: null,
    tabList: argTypesEnum.ARRAY,
    tabProps: null,
    title: null,
    type: argTypesEnum.STRING,
  },
};

const TemplateCardBasic = () => (
  <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);

export const CardBasic = TemplateCardBasic.bind({});

