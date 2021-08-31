/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { Radio, Divider, Checkbox, Button } from 'antd'
import Tabs from '../Tabs';
import { SizeEnum } from '../../../../enums/dataEnum';
const { TabPane } = Tabs;

export default {
  title: 'DataDisplay/Tabs',
  component: Tabs,
  argTypes: {
    activeKey: argTypesEnum.STRING,
    addIcon: null,
    animated: null,
    centered: argTypesEnum.BOOL_FALSE,
    defaultActiveKey: argTypesEnum.STRING,
    hideAdd: argTypesEnum.BOOL_FALSE,
    moreIcon: null,
    renderTabBar: null,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum,
    }),
    tabBarExtraContent: null,
    tabBarGutter: argTypesEnum.NUMBER,
    tabBarStyle: argTypesEnum.OBJECT,
    tabPosition: argTypesEnum.RADIO({
      options: ['top', 'right', 'bottom', 'left']
    }),
    destroyInactiveTabPane: argTypesEnum.BOOL_FALSE,
    type: argTypesEnum.RADIO({
      options: ['line', 'card', 'editable-card']
    }),
    onChange: argTypesEnum.EVENTS,
    onEdit: argTypesEnum.EVENTS,
    onTabClick: argTypesEnum.EVENTS,
    onTabScroll: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Tabs
    {...args}
  />
);

export const TabsDefault = Template.bind({});
TabsDefault.args = {
  children: 'Text',
};

const TemplateExampleBasic = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={() => {}}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" disabled key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}

export const TabsExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleIcon = () => {
  // import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            Tab 1
          </span>
        }
        key="1"
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            Tab 2
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
    </Tabs>
  )
}

export const TabsExampleIcon = TemplateExampleIcon.bind({});

const TemplateExampleSlide = () => {
  const [mode, setMode] = useState('top')

  const handleModeChange = e => {
    const mode = e.target.value;
    setMode(mode);
  };

  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey="1" tabPosition={mode as any} style={{ height: 220 }}>
        {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
          <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export const TabsExampleSlide = TemplateExampleSlide.bind({});

const TemplateExamplePosition = () => {
  const CheckboxGroup = Checkbox.Group;

  const operations = <Button>Extra Action</Button>;

  const OperationsSlot = {
    left: <Button className="tabs-extra-demo-button" style={{
      marginRight: "16px"
    }}>Left Extra Action</Button>,
    right: <Button>Right Extra Action</Button>,
  };

  const options = ['left', 'right'];

  const [position, setPosition] = React.useState(['left', 'right']);

  const slot = React.useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
  }, [position]);

  return (
    <>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={value => {
          setPosition(value as any);
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </>
  );
}

export const TabsExamplePosition = TemplateExamplePosition.bind({});

const TemplateExampleSize = () => {
  const [size, setSize] = useState<any>('small')

  const onChange = e => {
    setSize(e.target.value)
  };

  return (
    <div>
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
      <Tabs defaultActiveKey="1" type="card" size={size}>
        <TabPane tab="Card Tab 1" key="1">
          Content of card tab 1
        </TabPane>
        <TabPane tab="Card Tab 2" key="2">
          Content of card tab 2
        </TabPane>
        <TabPane tab="Card Tab 3" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export const TabsExampleSize = TemplateExampleSize.bind({});