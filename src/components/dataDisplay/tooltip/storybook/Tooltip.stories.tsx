/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Button, Divider, Space } from 'antd';

import Tooltip from '../Tooltip';

export default {
  title: 'DataDisplay/Tooltip',
  component: Tooltip,
  argTypes: {
    align: argTypesEnum.OBJECT,
    arrowPointAtCenter: argTypesEnum.BOOL_FALSE,
    autoAdjustOverflow: argTypesEnum.BOOL_TRUE,
    color: argTypesEnum.STRING,
    defaultVisible: argTypesEnum.BOOL_FALSE,
    destroyTooltipOnHide: argTypesEnum.BOOL_FALSE,
    getPopupContainer: argTypesEnum.EVENTS,
    mouseEnterDelay: argTypesEnum.NUMBER,
    mouseLeaveDelay: argTypesEnum.NUMBER,
    overlayClassName: argTypesEnum.STRING,
    overlayStyle: argTypesEnum.OBJECT,
    overlayInnerStyle: argTypesEnum.OBJECT,
    placement: argTypesEnum.STRING,
    trigger: null,
    visible: argTypesEnum.BOOL_FALSE,
    zIndex: argTypesEnum.NUMBER,
    onVisibleChange: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Tooltip {...args}>
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);

export const TooltipDefault = Template.bind({});
TooltipDefault.args = {
  title: 'prompt text',
};

const TemplateExamplePointToCenter = () => {
  return (
    <Space direction="vertical">
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>Align edge / 边缘对齐</Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Tooltip>
    </Space>
  )
}

export const TooltipExamplePointToCenter = TemplateExamplePointToCenter.bind({});

const TemplateExamplePosition = () => {
  const text = <span>prompt text</span>;

  const buttonWidth = 70;
  return (
    <div style={{
      height: "100%",
      width: "100%",
    }}>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement="leftTop" title={text}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Tooltip placement="rightTop" title={text}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Tooltip placement="bottomLeft" title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipExamplePosition = TemplateExamplePosition.bind({});

const TemplateExampleColor = () => {
  const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ];
  const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

  return (
    <>
      <Divider orientation="left">Presets</Divider>
      <div>
        {colors.map(color => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </div>
      <Divider orientation="left">Custom</Divider>
      <div>
        {customColors.map(color => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </div>
    </>
  )
}

export const TooltipExampleColor = TemplateExampleColor.bind({});

