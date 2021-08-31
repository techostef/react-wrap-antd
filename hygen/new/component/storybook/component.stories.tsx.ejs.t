---
to: <%= absPath %>/components/<%= category %>/<%= camelName %>/storybook/<%= pascalName %>.stories.tsx
---
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';

import <%= pascalName %> from '../<%= pascalName %>';

export default {
  title: 'Example/<%= category %>/<%= pascalName %>/<%= pascalName %>',
  component: <%= pascalName %>,
  argTypes: {
    className: argTypesEnum.STRING,
    danger: argTypesEnum.BOOL_FALSE,
    dataTestId: argTypesEnum.STRING,
    onClick: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <<%= pascalName %>
    {...args}
  />
);

export const <%= pascalName %>Default = Template.bind({});
<%= pascalName %>Default.args = {
  children: 'Text',
};
