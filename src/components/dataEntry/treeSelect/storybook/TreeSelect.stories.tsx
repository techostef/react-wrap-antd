/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { SizeEnum } from '../../../../enums/dataEnum';

import TreeSelect from '../TreeSelect';
const { TreeNode, SHOW_PARENT  } = TreeSelect;

export default {
  title: 'DataEntry/TreeSelect',
  component: TreeSelect,
  argTypes: {
    allowClear: argTypesEnum.BOOL_FALSE,
    autoClearSearchValue: argTypesEnum.BOOL_TRUE,
    bordered: argTypesEnum.BOOL_TRUE,
    defaultValue: argTypesEnum.STRING,
    disabled: argTypesEnum.BOOL_FALSE,
    dropdownClassName: argTypesEnum.STRING,
    dropdownMatchSelectWidth: null,
    dropdownRender: argTypesEnum.EVENTS,
    dropdownStyle: argTypesEnum.OBJECT,
    filterTreeNode: null,
    getPopupContainer: argTypesEnum.EVENTS,
    labelInValue: argTypesEnum.BOOL_FALSE,
    listHeight: argTypesEnum.NUMBER,
    loadData: argTypesEnum.EVENTS,
    maxTagCount: null,
    maxTagPlaceholder: null,
    multiple: argTypesEnum.BOOL_FALSE,
    placeholder: argTypesEnum.STRING,
    searchValue: argTypesEnum.STRING,
    showArrow: argTypesEnum.BOOL_FALSE,
    showCheckedStrategy: null,
    showSearch: argTypesEnum.BOOL_FALSE,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum,
    }),
    suffixIcon: null,
    switcherIcon: null,
    treeCheckable: argTypesEnum.BOOL_FALSE,
    treeCheckStrictly: argTypesEnum.BOOL_FALSE,
    treeData: argTypesEnum.ARRAY,
    treeDataSimpleMode: argTypesEnum.BOOL_FALSE,
    treeDefaultExpandAll: argTypesEnum.ARRAY,
    treeExpandedKeys: argTypesEnum.ARRAY,
    treeIcon: argTypesEnum.BOOL_FALSE,
    treeNodeFilterProp: argTypesEnum.STRING,
    treeNodeLabelProp: argTypesEnum.STRING,
    value: null,
    virtual: argTypesEnum.BOOL_TRUE,
    onChange: argTypesEnum.EVENTS,
    onDropdownVisibleChange: argTypesEnum.EVENTS,
    onSearch: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
    onTreeExpand: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <TreeSelect
    {...args}
  >
    <TreeNode value="parent 1" title="parent 1">
      <TreeNode value="parent 1-0" title="parent 1-0">
        <TreeNode value="leaf1" title="leaf1" />
        <TreeNode value="leaf2" title="leaf2" />
      </TreeNode>
      <TreeNode value="parent 1-1" title="parent 1-1">
        <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
      </TreeNode>
    </TreeNode>
  </TreeSelect>
);

export const TreeSelectDefault = Template.bind({});
TreeSelectDefault.args = {
  children: 'Text',
};

const TemplateExampleBasic = () => {
  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };
  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="leaf1" />
          <TreeNode value="leaf2" title="leaf2" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  );
}

export const TreeSelectExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleMultipleSelection = () => {
  const [value, setValue] = useState(undefined)

  const onChange = value => {
    console.log(value);
    setValue(value);
  };

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="my leaf" />
          <TreeNode value="leaf2" title="your leaf" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  );
}

export const TreeSelectExampleMultipleSelection = TemplateExampleMultipleSelection.bind({});

const TemplateExampleCheckable = () => {
  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];
  
  const [value, setValue] = useState('0-0-0')

  const onChange = value => {
    console.log('onChange ', value);
    setValue(value)
  };

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
}

export const TreeSelectExampleCheckable = TemplateExampleCheckable.bind({});
