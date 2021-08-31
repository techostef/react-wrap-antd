/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Collapse, { CollapseExpandIConPosition, CollapseCollapsible } from '../Collapse';
import { Select, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export default {
  title: 'DataDisplay/Collapse',
  component: Collapse,
  argTypes: {
    accordion: argTypesEnum.BOOL_FALSE,
    activeKey: null,
    bordered: argTypesEnum.BOOL_TRUE,
    className: argTypesEnum.STRING,
    collapsible: argTypesEnum.RADIO({
      defaultValue: CollapseCollapsible.header,
      options: CollapseCollapsible,
    }),
    dataTestId: argTypesEnum.STRING,
    defaultActiveKey: null,
    destroyInactivePanel: argTypesEnum.BOOL_FALSE,
    expandIcon: argTypesEnum.EVENTS,
    expandIconPosition: argTypesEnum.RADIO({
      defaultValue: CollapseExpandIConPosition.left,
      options: CollapseExpandIConPosition,
    }),
    onChange: argTypesEnum.EVENTS,
    ghost: argTypesEnum.BOOL_FALSE,
  },
};

const TemplateCollapseBasic = () => {
  const callback = (key) => {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Collapse.Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}

const TemplateCollapseAccordion = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  return (
    <Collapse accordion>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}

const TemplateCollapseNestedPanel = () => {
  const callback = (key) => {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  return (
    <Collapse onChange={callback}>
      <Collapse.Panel header="This is panel header 1" key="1">
        <Collapse defaultActiveKey="1">
          <Collapse.Panel header="This is panel nest panel" key="1">
            <p>{text}</p>
          </Collapse.Panel>
        </Collapse>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}

const TemplateBorderlessCollapse = () => {
  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );
  
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Collapse.Panel header="This is panel header 1" key="1">
        {text}
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" key="2">
        {text}
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 3" key="3">
        {text}
      </Collapse.Panel>
    </Collapse>
  )
}

const TemplateCollapseWithNoArrow = () => {
  const callback = (key) => {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Collapse.Panel header="This is panel header with arrow icon" key="1">
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}

const TemplateCollapseWithExtraNodePosition = () => {
  const callback = (key) => {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  const genExtra = () => (
    <SettingOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  
  const [expandIconPosition, setExpandIconPosition] = useState(CollapseExpandIConPosition.left);
  
  const onPositionChange = (expandIconPosition) => {
    setExpandIconPosition(expandIconPosition);
  };
  
  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={callback}
        expandIconPosition={expandIconPosition}
      >
        <Collapse.Panel header="This is panel header 1" key="1" extra={genExtra()}>
          <div>{text}</div>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 2" key="2" extra={genExtra()}>
          <div>{text}</div>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 3" key="3" extra={genExtra()}>
          <div>{text}</div>
        </Collapse.Panel>
      </Collapse>
      <br />
      <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{ margin: '0 8px' }}
        onChange={onPositionChange}
      >
        <Option value="left">left</Option>
        <Option value="right">right</Option>
      </Select>
    </>
  )
}

const TemplateCollapseWithSpecifyCollapsible = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
   return (
    <Space direction="vertical">
      <Collapse collapsible={CollapseCollapsible.header} defaultActiveKey={['1']}>
        <Collapse.Panel header="This panel can only be collapsed by clicking text" key="1">
          <p>{text}</p>
        </Collapse.Panel>
      </Collapse>
      <Collapse collapsible={CollapseCollapsible.disabled}>
        <Collapse.Panel header="This panel can't be collapsed" key="1">
          <p>{text}</p>
        </Collapse.Panel>
      </Collapse>
    </Space>
   )
}

export const CollapseBasic = TemplateCollapseBasic.bind({});
export const CollapseWithAccordion = TemplateCollapseAccordion.bind({});
export const CollapseWithNestedPanel = TemplateCollapseNestedPanel.bind({});
export const CollapeseWithBorderlessPanel = TemplateBorderlessCollapse.bind({});
export const CollapseWithNoArrow = TemplateCollapseWithNoArrow.bind({});
export const CollapseWithExtraNodePosition = TemplateCollapseWithExtraNodePosition.bind({});
export const CollapseWithSpecifyCollapsible = TemplateCollapseWithSpecifyCollapsible.bind({});