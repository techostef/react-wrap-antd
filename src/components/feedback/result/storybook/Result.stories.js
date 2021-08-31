/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Result, { ResultStatus } from '../Result';

export default {
  title: 'Feedback/Result',
  component: Result,
  argTypes: {
    extra: null,
    icon: null,
    subTitle: argTypesEnum.STRING,
    title: argTypesEnum.STRING,
    status: argTypesEnum.RADIO({
      defaultValue: ResultStatus.info,
      options: Object.values(ResultStatus),
    })
  },
};

const Template = (args) => {
  return (
    <Result {...args} />
  )
};

export const BasicResult = Template.bind({});
BasicResult.args = {
  status: ResultStatus.info,
  title: 'Your operation has been executed',
  subTitle: 'Your sub title here',
}
