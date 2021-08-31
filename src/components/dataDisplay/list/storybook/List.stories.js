/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import List, { ListItemLayout, ListItemSize } from '../List';
import { Avatar, Typography, Divider, Card, Space, Spin } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

export default {
  title: 'DataDisplay/List',
  component: List,
  argTypes: {
    bordered: argTypesEnum.BOOL_FALSE,
    dataSource: argTypesEnum.ARRAY,
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    footer: null,
    grid: argTypesEnum.OBJECT,
    header: null,
    itemLayout: argTypesEnum.RADIO ({
      defaultValue: ListItemLayout.horizontal,
      options: ListItemLayout,
    }),
    loading: argTypesEnum.BOOL_FALSE,
    loadMore: null,
    locale: argTypesEnum.OBJECT,
    pagination: null,
    renderItem: argTypesEnum.EVENTS,
    rowKey: argTypesEnum.STRING,
    size: argTypesEnum.RADIO ({
      defaultValue: ListItemSize.default,
      options: ListItemSize,
    }),
    split: argTypesEnum.BOOL_TRUE,
  },
};

const TemplateListBasic = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  
  return (
    <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size={ListItemSize.small}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size={ListItemSize.large}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </>
  )
}

const TemplateListBasicWithMeta = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  
  return (
    <List
      itemLayout={ListItemLayout.horizontal}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  )
}

const TemplateListWithGrid = () => {
  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
   />
  )
}

const TemplateListVertical = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }
  
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={listData}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  )
}

const TemplateListWithScrollingLoaded = () => {
  const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  useEffect(() => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    })
  }, [])
  
  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      setHasMore(false)
      setLoading(false)
      return;
    }
    fetchData(res => {
      data = data.concat(res.results);
      setData(data)
      setLoading(false)
    });
  }
  
  return (
    <div className="demo-infinite-container">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
}

export const ListBasic = TemplateListBasic.bind({});
export const ListBasicWithMeta = TemplateListBasicWithMeta.bind({});
export const ListWithGrid = TemplateListWithGrid.bind({});
export const ListVertical = TemplateListVertical.bind({});
export const ListWithScrollingLoaded = TemplateListWithScrollingLoaded.bind({});

