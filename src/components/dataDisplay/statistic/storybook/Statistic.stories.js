/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Statistic from '../Statistic';
import { Row, Col, Button, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default {
  title: 'DataDisplay/Statistic',
  component: Statistic,
  argTypes: {
    className: argTypesEnum.STRING,
    decimalSeparator: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    formatter: argTypesEnum.EVENT,
    groupSeparator: argTypesEnum.STRING,
    loading: argTypesEnum.BOOL_FALSE,
    precision: argTypesEnum.NUMBER,
    prefix: null,
    suffix: null,
    title: null,
    value: null,
    valueStyle: argTypesEnum.OBJECT,
  },
};

const TemplateStatisticBasic = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);

const TemplateStatisticWithPrefixAndSuffix = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
)

const TemplateStatisticInCard = () => {
  
  const style = {
    padding: "30px",
    background: "#ececec",
  }
  
  return(
    <div style={style}>
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
  )
}

const TemplateStatisticWithCountdown = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  
  const onFinish = () => {
    console.log('finished!');
  }
  
  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  }
  
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic.Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
      <Col span={12}>
        <Statistic.Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
      </Col>
      <Col span={24} style={{ marginTop: 32 }}>
        <Statistic.Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
      </Col>
      <Col span={12}>
        <Statistic.Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
      </Col>
    </Row>
  )
}

export const StatisticBasic = TemplateStatisticBasic.bind({});
export const StatisticWithPrefixAndSuffix = TemplateStatisticWithPrefixAndSuffix.bind({});
export const StatisticInCard = TemplateStatisticInCard.bind({});
export const StatisticWithCountdown = TemplateStatisticWithCountdown.bind({});

