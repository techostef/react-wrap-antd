/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Badge, { BadgeSize, BadgeStatus } from '../Badge';
import { Avatar, Space, Switch, Button, Divider, Card } from 'antd';
import { ClockCircleOutlined, NotificationOutlined, MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';

export default {
  title: 'DataDisplay/Badge',
  component: Badge,
  argTypes: {
    className: argTypesEnum.STRING,
    color: argTypesEnum.STRING,
    count: null,
    dataTestId: argTypesEnum.STRING,
    dot: argTypesEnum.BOOL_FALSE,
    offset: argTypesEnum.ARRAY,
    overflowCount: argTypesEnum.NUMBER,
    showZero: argTypesEnum.BOOL_FALSE,
    size: argTypesEnum.RADIO({
      defaultValue: BadgeSize.default,
      options: BadgeSize,
    }), 
    status: argTypesEnum.RADIO({
      defaultValue: BadgeStatus.default,
      options: BadgeStatus,
    }),
    text: null,
    title: argTypesEnum.STRING,
  },
};

const TemplateBadgeBasic = () => (
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <br/>
    <br/>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <br/>
    <br/>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

const TemplateStandAloneBadge = () => {
  const [show, setShow] = useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0} />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  );
}

const TemplateBadgeOverflowCount = () => (
  <>
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <br/>
    <br/>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <br/>
    <br/>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <br/>
    <br/>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

const TemplateRedBadge = () => (
  <>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </>
)

const TemplateBadgeDynamic = () => {
  const ButtonGroup = Button.Group;
  
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  
  const increase = () => {
    const newCount = count + 1;
    setCount(newCount)
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
   setCount(newCount)
  };

  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount)
  };

  const onChange = show => {
    setShow(show)
  };
  
  return (
    <>
      <Badge count={count}>
        <Avatar shape="square" size="large" />
      </Badge>
      <ButtonGroup>
        <Button onClick={decline}>
          <MinusOutlined />
        </Button>
        <Button onClick={increase}>
          <PlusOutlined />
        </Button>
        <Button onClick={random}>
          <QuestionOutlined />
        </Button>
      </ButtonGroup>
      <Divider />
      <Badge dot={show}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Switch onChange={onChange} checked={show} />
    </>
  );
}

const TemplateClickableBadge = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
)

const TemplateBadgeWithOffset = () => {
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
}

const TemplateBadgeSize = () => (
  <>
    <Badge size={BadgeSize.default} count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size={BadgeSize.small} count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

const TemplateBadgeWithStatus = () => (
  <>
    <Badge status={BadgeStatus.success} />
    <Badge status={BadgeStatus.error} />
    <Badge status={BadgeStatus.default} />
    <Badge status={BadgeStatus.success} />
    <Badge status={BadgeStatus.warning} />
    <br />
    <Badge status={BadgeStatus.success} text="Success" />
    <br />
    <Badge status={BadgeStatus.error} text="Error" />
    <br />
    <Badge status={BadgeStatus.default} text="Default" />
    <br />
    <Badge status={BadgeStatus.processing} text="Processing" />
    <br />
    <Badge status={BadgeStatus.warning} text="Warning" />
  </>
)

const TemplateBadgeCustomColor = () => {
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
  
  return (
    <>
      <div>
        {colors.map(color => (
          <div key={color}>
            <Badge color={color} text={color} />
          </div>
        ))}
      </div>
    </>
  )
}

const TemplateBadgeWithRibbon = () => (
  <>
    <Badge.Ribbon text="Hippies">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="cyan">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="green">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="volcano">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="magenta">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
  </>
)

export const BadgeBasic = TemplateBadgeBasic.bind({});
export const BadgeStandAlone = TemplateStandAloneBadge.bind({});
export const BadgeOverflowCount = TemplateBadgeOverflowCount.bind({});
export const BadgeRedDot = TemplateRedBadge.bind({});
export const BadgeDynamic = TemplateBadgeDynamic.bind({});
export const BadgeClickable = TemplateClickableBadge.bind({});
export const BadgeOffset = TemplateBadgeWithOffset.bind({});
export const BadgeWithSize = TemplateBadgeSize.bind({});
export const BadgeWithStatus = TemplateBadgeWithStatus.bind({});
export const BadgeWithCustomColor = TemplateBadgeCustomColor.bind({});
export const BadgeWithRibbon = TemplateBadgeWithRibbon.bind({});
