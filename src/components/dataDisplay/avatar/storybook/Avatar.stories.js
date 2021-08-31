/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Avatar, { AvatarShapes } from '../Avatar';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Button, Badge, Image, Divider, Tooltip } from 'antd';

export default {
  title: 'DataDisplay/Avatar',
  component: Avatar,
  argTypes: {
    alt: argTypesEnum.STRING,
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    draggable: argTypesEnum.BOOL_FALSE,
    gap: argTypesEnum.NUMBER,
    icon: null,
    onError: argTypesEnum.EVENTS,
    shape: argTypesEnum.RADIO({
      defaultValue: AvatarShapes.circle,
      options: AvatarShapes,
    }),
    size: null,
    src: null,
    srcSet: argTypesEnum.STRING,
  },
};

const Template = (args) => (
  <Avatar
    {...args}
  />
);

const TemplateBasicAvatar = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </div>
    <div>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  </>
)

const TemplateAvatarType = () => (
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar
      src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </>
)

const TemplateAvatarWithBadge = () => (
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
  </>
)

const TemplateAutosetFontSize = () => {
  const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  const GapList = [4, 3, 2, 1];
  
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);
  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };
  const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
  };
  return (
    <>
      <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large" gap={gap}>
        {user}
      </Avatar>
      <Button
        size="small"
        style={{ margin: '0 16px', verticalAlign: 'middle' }}
        onClick={changeUser}
      >
        ChangeUser
      </Button>
      <Button size="small" style={{ verticalAlign: 'middle' }} onClick={changeGap}>
        changeGap
      </Button>
    </>
  );
}

const TemplateAvatarGroup = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  </>
)

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  icon:<UserOutlined />,
  size:"default",
};
export const AvatarBasic = TemplateBasicAvatar.bind({});
export const AvatarType = TemplateAvatarType.bind({});
export const AvatarWithBadge = TemplateAvatarWithBadge.bind({});
export const AvatarAutosetFontSize = TemplateAutosetFontSize.bind({});
export const AvatarGroup = TemplateAvatarGroup.bind({});