/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Tag } from 'antd';
import Select from '../Select';
import { SizeEnum } from '../../../../enums/dataEnum';

export default {
  title: 'DataEntry/Select',
  component: Select,
  argTypes: {
    allowClear: argTypesEnum.BOOL_FALSE,
    autoClearSearchValue: argTypesEnum.BOOL_TRUE,
    autoFocus: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    clearIcon: null,
    defaultActiveFirstOption: argTypesEnum.BOOL_TRUE,
    defaultOpen: argTypesEnum.BOOL_FALSE,
    defaultValue: null,
    disabled: argTypesEnum.BOOL_FALSE,
    dropdownClassName: argTypesEnum.STRING,
    dropdownMatchSelectWidth: null,
    dropdownRender: null,
    dropdownStyle: argTypesEnum.OBJECT,
    filterOption: null,
    filterSort: null,
    getPopupContainer: argTypesEnum.EVENTS,
    labelInValue: argTypesEnum.BOOL_FALSE,
    listHeight: argTypesEnum.NUMBER,
    loading: argTypesEnum.BOOL_FALSE,
    maxTagCount: null,
    maxTagPlaceholder: null,
    maxTagTextLength: argTypesEnum.NUMBER,
    menuItemSelectedIcon: argTypesEnum.RADIO({
      options: ['multiple', 'tags']
    }),
    notFoundContent: null,
    open: argTypesEnum.BOOL_FALSE,
    optionFilterProp: argTypesEnum.STRING,
    optionLabelProp: argTypesEnum.STRING,
    options: argTypesEnum.ARRAY,
    placeholder: null,
    removeIcon: null,
    searchValue: argTypesEnum.STRING,
    showArrow: argTypesEnum.BOOL_TRUE,
    showSearch: argTypesEnum.BOOL_FALSE,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum,
    }),
    suffixIcon: null,
    tagRender: argTypesEnum.EVENTS,
    tokenSeparators: argTypesEnum.ARRAY,
    value: null,
    virtual: argTypesEnum.BOOL_TRUE,
    onBlur: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    onClear: argTypesEnum.EVENTS,
    onDeselect: argTypesEnum.EVENTS,
    onDropdownVisibleChange: argTypesEnum.EVENTS,
    onFocus: argTypesEnum.EVENTS,
    onInputKeyDown: argTypesEnum.EVENTS,
    onMouseEnter: argTypesEnum.EVENTS,
    onMouseLeave: argTypesEnum.EVENTS,
    onPopupScroll: argTypesEnum.EVENTS,
    onSearch: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Select
    {...args}
  />
);

export const SelectDefault = Template.bind({});
SelectDefault.args = {
  children: 'Text',
};

const TemplateExampleBasic = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
        <Option value="lucy">Lucy</Option>
      </Select>
    </>
  )
}

export const SelectExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleSearchField = () => {
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  )
}

export const SelectExampleSearchField = TemplateExampleSearchField.bind({});

const TemplateExampleCustomSelection = () => {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>
    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </div>
    </Option>
  </Select>
  )
}

export const SelectExampleCustomSelection = TemplateExampleCustomSelection.bind({});

const TemplateExampleMultiSelection = () => {
  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i} value={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        disabled
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
    </>
  )
}

export const SelectExampleMultiSelection = TemplateExampleMultiSelection.bind({});

const TemplateExampleOptGroup = () => {
  const { Option, OptGroup } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
      <OptGroup label="Manager">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </OptGroup>
      <OptGroup label="Engineer">
        <Option value="Yiminghe">yiminghe</Option>
      </OptGroup>
    </Select>
  )
}

export const SelectExampleOptGroup = TemplateExampleOptGroup.bind({});

const TemplateExampleCustomTag = () => {
  const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = event => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      defaultValue={['gold', 'cyan']}
      style={{ width: '100%' }}
      options={options}
    />
  )
}

export const SelectExampleCustomTag = TemplateExampleCustomTag.bind({});

// const TemplateExample = () => {
// }

// export const SelectExample = TemplateExample.bind({});
