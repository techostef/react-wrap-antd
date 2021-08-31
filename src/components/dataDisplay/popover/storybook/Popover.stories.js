/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Popover, { PopoverTrigger, PopoverPlacement } from '../Popover';
import { Button } from 'antd';

export default {
  title: 'DataDisplay/Popover',
  component: Popover,
  argTypes: {
    className: argTypesEnum.STRING,
    content: null,
    dataTestId: argTypesEnum.STRING,
    title: null,
  },
};

const TemplateBasicPopover = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  
  return (
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  )
}

const TemplatePopoverWithTrigger = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  
  return (
    <div>
      <Popover content={content} title="Title" trigger={PopoverTrigger.hover}>
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger={PopoverTrigger.focus}>
        <Button>Focus me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger={PopoverTrigger.click}>
        <Button>Click me</Button>
      </Popover>
    </div>
  )
}

const TemplatePopoverWithPlacement = () => {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const buttonWidth = 70;
  
  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement={PopoverPlacement.topLeft} title={text} content={content} trigger="click">
          <Button>TL</Button>
        </Popover>
        <Popover placement={PopoverPlacement.top} title={text} content={content} trigger="click">
          <Button>Top</Button>
        </Popover>
        <Popover placement={PopoverPlacement.topRight} title={text} content={content} trigger="click">
          <Button>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement={PopoverPlacement.leftTop} title={text} content={content} trigger="click">
          <Button>LT</Button>
        </Popover>
        <Popover placement={PopoverPlacement.left} title={text} content={content} trigger="click">
          <Button>Left</Button>
        </Popover>
        <Popover placement={PopoverPlacement.topBottom} title={text} content={content} trigger="click">
          <Button>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Popover placement={PopoverPlacement.rightTop} title={text} content={content} trigger="click">
          <Button>RT</Button>
        </Popover>
        <Popover placement={PopoverPlacement.right} title={text} content={content} trigger="click">
          <Button>Right</Button>
        </Popover>
        <Popover placement={PopoverPlacement.rightBottom} title={text} content={content} trigger="click">
          <Button>RB</Button>
        </Popover>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement={PopoverPlacement.bottomLeft} title={text} content={content} trigger="click">
          <Button>BL</Button>
        </Popover>
        <Popover placement={PopoverPlacement.bottom} title={text} content={content} trigger="click">
          <Button>Bottom</Button>
        </Popover>
        <Popover placement={PopoverPlacement.bottomRight} title={text} content={content} trigger="click">
          <Button>BR</Button>
        </Popover>
      </div>
    </div>
  )
}

const TemplatePopoverControl = () => {
  const [visible, setVisible] = useState(false);
  
  const hide = () => {
    setVisible(false);
  }
  
  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible)
  }
  
  return (
    <Popover
      content={<a onClick={this.hide}>Close</a>}
      title="Title"
      trigger="click"
      visible={this.state.visible}
      onVisibleChange={this.handleVisibleChange}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  );
}

const TemplatePopoverWithArrowPointAtCenter = () => {
  const content = (
    <>
      <p>Content</p>
      <p>Content</p>
    </>
  );
  
  return (
    <>
      <Popover placement="topLeft" title="Title" content={content}>
        <Button>Align edge / 边缘对齐</Button>
      </Popover>
      <Popover placement="topLeft" title="Title" content={content} arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Popover>
    </>
  )
}

const TemplatePopoverWithHoverAndClick = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const hide = () => {
    setClicked(false);
    setHovered(false);
  }
  
  const handleHoverChange = (newVisible) => {
    setHovered(newVisible)
    setClicked(false)
  };

  const handleClickChange = (newVisible) => {
    setClicked(newVisible)
    setHovered(false)
  }
  
  const hoverContent = <div>This is hover content.</div>;
  const clickContent = <div>This is click content.</div>;
  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      visible={hovered}
      onVisibleChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>Close</a>
          </div>
        }
        title="Click title"
        trigger="click"
        visible={clicked}
        onVisibleChange={handleClickChange}
      >
        <Button>Hover and click / 悬停并单击</Button>
      </Popover>
    </Popover>
  );
}

export const PopoverBasic = TemplateBasicPopover.bind({});
export const PopoverWithTrigger = TemplatePopoverWithTrigger.bind({});
export const PopoverWithPlacement = TemplatePopoverWithPlacement.bind({});
export const PopoverWithControl = TemplatePopoverControl.bind({});
export const PopoverWithArrowPointAtCenter = TemplatePopoverWithArrowPointAtCenter.bind({});
export const PopoverWithHoverAndClick = TemplatePopoverWithHoverAndClick.bind({});