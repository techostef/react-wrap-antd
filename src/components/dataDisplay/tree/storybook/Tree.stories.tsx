/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Switch, Input } from 'antd';
import Tree from '../Tree';

const { Search } = Input;

export default {
  title: 'DataDisplay/Tree',
  component: Tree,
  argTypes: {
    allowDrop: argTypesEnum.EVENTS,
    autoExpandParent: argTypesEnum.BOOL_FALSE,
    blockNode: argTypesEnum.BOOL_FALSE,
    checkable: argTypesEnum.BOOL_FALSE,
    checkedKeys: null,
    checkStrictly: argTypesEnum.BOOL_FALSE,
    defaultCheckedKeys: argTypesEnum.ARRAY,
    defaultExpandAll: argTypesEnum.BOOL_FALSE,
    defaultExpandedKeys: argTypesEnum.ARRAY,
    defaultExpandParent: argTypesEnum.BOOL_TRUE,
    defaultSelectedKeys: argTypesEnum.ARRAY,
    disabled: argTypesEnum.BOOL_FALSE,
    draggable: argTypesEnum.BOOL_FALSE,
    expandedKeys: argTypesEnum.ARRAY,
    filterTreeNode: argTypesEnum.EVENTS,
    height: argTypesEnum.NUMBER,
    icon: null,
    loadData: argTypesEnum.EVENTS,
    loadedKeys: argTypesEnum.ARRAY,
    multiple: argTypesEnum.BOOL_FALSE,
    selectable: argTypesEnum.BOOL_TRUE,
    selectedKeys: argTypesEnum.ARRAY,
    showIcon: argTypesEnum.BOOL_FALSE,
    showLine: null,
    switcherIcon: null,
    titleRender: null,
    treeData: argTypesEnum.ARRAY,
    treeLoadedKeys: argTypesEnum.ARRAY,
    virtual: argTypesEnum.BOOL_TRUE,
    onCheck: argTypesEnum.EVENTS,
    onDragEnd: argTypesEnum.EVENTS,
    onDragEnter: argTypesEnum.EVENTS,
    onDragLeave: argTypesEnum.EVENTS,
    onDragOver: argTypesEnum.EVENTS,
    onDragStart: argTypesEnum.EVENTS,
    onDrop: argTypesEnum.EVENTS,
    onExpand: argTypesEnum.EVENTS,
    onLoad: argTypesEnum.EVENTS,
    onRightClick: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
  },
};

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const { DirectoryTree } = Tree;

const Template = (args) => (
  <Tree
    {...args}
  />
);

export const TreeDefault = Template.bind({});
TreeDefault.args = {
  checkable: true,
  treeData: treeData,
};

const TemplateExampleWithLine = () => {
  // import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined /> },
            {
              title: (
                <>
                  <div>multiple line title</div>
                  <div>multiple line title</div>
                </>
              ),
              key: '0-0-0-1',
              icon: <CarryOutOutlined />,
            },
            { title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined /> },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          icon: <CarryOutOutlined />,
          children: [{ title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined /> }],
        },
        {
          title: 'parent 1-2',
          key: '0-0-2',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined /> },
            {
              title: 'leaf',
              key: '0-0-2-1',
              icon: <CarryOutOutlined />,
              switcherIcon: <FormOutlined />,
            },
          ],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '0-1',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'parent 2-0',
          key: '0-1-0',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-1-0-0', icon: <CarryOutOutlined /> },
            { title: 'leaf', key: '0-1-0-1', icon: <CarryOutOutlined /> },
          ],
        },
      ],
    },
  ];

  const [showLine, setShowLine] = useState<boolean | { showLeafIcon: boolean }>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean>(true);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const onSetLeafIcon = (checked: boolean) => {
    setShowLeafIcon(checked);
    setShowLine({ showLeafIcon: checked });
  };

  const onSetShowLine = (checked: boolean) => {
    setShowLine(checked ? { showLeafIcon } : false);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        showLine: <Switch checked={!!showLine} onChange={onSetShowLine} />
        <br />
        <br />
        showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon: <Switch checked={showLeafIcon} onChange={onSetLeafIcon} />
      </div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
}

export const TreeExampleWithLine = TemplateExampleWithLine.bind({});

const TemplateExampleDirectory = () => {
  const treeData = [
    {
      title: 'parent 0',
      key: '0-0',
      children: [
        { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
      ],
    },
  ];

  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
}

export const TreeExampleDirectory = TemplateExampleDirectory.bind({});

const TemplateExampleDragAble = () => {
  const [gData, setGData] = useState(treeData)
  const [expandedKeys, setExpandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0'])
  
  const onDragEnter = info => {
    console.log(info);
    setExpandedKeys(info.expandedKeys);
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  const onDrop = info => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    setGData(data);
  };

  console.log('gData', gData);

  return (
    <Tree
      className="draggable-tree"
      defaultExpandedKeys={expandedKeys}
      draggable
      blockNode
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      treeData={gData}
    />
  );

}

export const TreeExampleDragAble = TemplateExampleDragAble.bind({});

const TemplateExampleSearch = () => {
  const x = 3;
  const y = 2;
  const z = 1;
  const [expandedKeys, setExpandedKeys] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const gData = [];
  const dataList = [];

  const generateList = data => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const { key } = node;
      dataList.push({ key, title: key });
      if (node.children) {
        generateList(node.children);
      }
    }
  };
  generateList(gData);


  const onExpand = expandedKeys => {
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  };

  const generateData = (_level, _preKey?, _tns?) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;
  
    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ title: key, key });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);

  const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some(item => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };

  const onChange = e => {
    const { value } = e.target;
    const expandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(expandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const loop = data =>
    data.map(item => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="site-tree-search-value">{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });

  return (
    <div>
      <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={onChange} />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={loop(gData)}
      />
    </div>
  );
}

export const TreeExampleSearch = TemplateExampleSearch.bind({});

// const TemplateExample = () => {}

// export const TreeExample = TemplateExample.bind({});

