/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Slider } from 'antd';
import Divider from '../../divider/Divider';
import Col from '../../col/Col';
import Row, { RowAlign, RowJustify } from '../../row/Row';
import argTypesEnum from '../../../../enums/argTypesEnum';

export default {
  title: 'Layout/Grid',
  component: Col,
  argTypes: {
    align: argTypesEnum.RADIO({
      defaultValue: RowAlign.top,
      options: RowAlign
    }),
    justify: argTypesEnum.RADIO({
      defaultValue: RowJustify.start,
      options: Object.values(RowJustify)
    })
  }
};

const Template = () => {
  const styleCol = {
    backgroundColor: '#e6e6e6',
    padding: 20,
    border: '1px solid #fff',
  }

  return (
    <>
      <Row>
        <Col style={styleCol} span={24}>col</Col>
      </Row>
      <Row>
        <Col style={styleCol} span={12}>col-12</Col>
        <Col style={styleCol} span={12}>col-12</Col>
      </Row>
      <Row>
        <Col style={styleCol} span={8}>col-8</Col>
        <Col style={styleCol} span={8}>col-8</Col>
        <Col style={styleCol} span={8}>col-8</Col>
      </Row>
      <Row>
        <Col style={styleCol} span={6}>col-6</Col>
        <Col style={styleCol} span={6}>col-6</Col>
        <Col style={styleCol} span={6}>col-6</Col>
        <Col style={styleCol} span={6}>col-6</Col>
      </Row>
    </>
  )
};

const TemplateGridGutter = () => {
  const style = { background: '#eaeaea', padding: '8px' };
  return (
    <>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
}

const TemplateGridSort = () => {
  const styleCol = {
    backgroundColor: '#e6e6e6',
    padding: 20,
    border: '1px solid #fff',
  }
  return (
    <Row>
      <Col span={18} push={6} style={styleCol}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18} style={styleCol}>
        col-6 col-pull-18
      </Col>
    </Row>
  )
}

const TemplateOffset = () => {
  const styleCol = {
    backgroundColor: '#e6e6e6',
    padding: 20,
    border: '1px solid #fff',
  }
  
  return (
    <>
      <Row>
        <Col style={styleCol} span={8}>col-8</Col>
        <Col style={styleCol} span={8} offset={8}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col style={styleCol} span={6} offset={6}>
          col-6 col-offset-6
        </Col>
        <Col style={styleCol} span={6} offset={6}>
          col-6 col-offset-6
        </Col>
      </Row>
      <Row>
        <Col style={styleCol} span={12} offset={6}>
          col-12 col-offset-6
        </Col>
      </Row>
    </>
  )
}

const TemplateRowAlignment = (args) => {
  const styleCol = {
    backgroundColor: '#e6e6e6',
    padding: 20,
    border: '1px solid #fff',
  }

  const DemoBox = ({height, children}) => (
    <div style={{height, ...styleCol}}>
      {children}
    </div>
  )
  
  return (
    <Row {...args}>
      <Col span={4}>
        <DemoBox height={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox height={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox height={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox height={80}>col-4</DemoBox>
      </Col>
    </Row>
  )
}

const TemplatePlayground = () => {
  const styleCol = {
    height: 120,
    fontSize: 14,
    border: '1px solid #fff',
    background: '#eaeaea',
    padding: 20,
    borderRadius: 5
  }

  const [gutterKey, setGutterKey] = useState(1);
  const [vgutterKey, setVgutterKey] = useState(1);
  const [colCountKey, setColCountKey] = useState(2);

  const gutters = {};
  const vgutters = {};
  const colCounts = {};

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    gutters[i] = value;
  });
  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vgutters[i] = value;
  });
  [2, 3, 4, 6, 8, 12].forEach((value, i) => {
    colCounts[i] = value;
  });

  const onGutterChange = gutterKey => {
    setGutterKey(gutterKey);
  };

  const onVGutterChange = vgutterKey => {
    setVgutterKey(vgutterKey);
  };

  const onColCountChange = colCountKey => {
    setColCountKey(colCountKey);
  };

  const cols = [];
  const colCount = colCounts[colCountKey];
  let colCode = '';
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        <div style={styleCol}>Column</div>
      </Col>,
    );
    colCode += `  <Col span={${24 / colCount}} />\n`;
  }

  return (
    <>
      <span>Horizontal Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={onGutterChange}
          marks={gutters}
          step={null}
          tipFormatter={value => gutters[value]}
        />
      </div>
      <span>Vertical Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={onVGutterChange}
          marks={vgutters}
          step={null}
          tipFormatter={value => vgutters[value]}
        />
      </div>
      <span>Column Count:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={onColCountChange}
          marks={colCounts}
          step={null}
          tipFormatter={value => colCounts[value]}
        />
      </div>
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
        {cols}
        {cols}
      </Row>
      Another Row:
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
    </>
  );
}

export const BasicGrid = Template.bind({});
export const GridGutter = TemplateGridGutter.bind({});
export const GridOffset = TemplateOffset.bind({});
export const GridSort = TemplateGridSort.bind({});
export const RowAlignment = TemplateRowAlignment.bind({});
export const GridPlayground = TemplatePlayground.bind({});