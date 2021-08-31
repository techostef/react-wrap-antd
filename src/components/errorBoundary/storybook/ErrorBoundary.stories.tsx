/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import ErrorBoundary from '../ErrorBoundary';

export default {
  title: 'Example/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {
  },
};

const Children = () => {
  let data: any = '{"children":{"id":1}}';
  data = JSON.parse(data);
  return (
    <div>
      {data.children.name}
    </div>
  )
}

const Template = (args) => (
  // <ErrorBoundary
  //   {...args}
  // >
  //   <Children />
  // </ErrorBoundary>
  <Children />
);

export const ErrorBoundaryBasic = Template.bind({});
ErrorBoundaryBasic.args = {
};
