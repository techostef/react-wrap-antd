/* eslint-disable react/jsx-props-no-spreading */
import React, { useState  } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';
import { Space } from 'antd';
import Typography from '../Typography';

export default {
  title: 'General/Typography',
  component: Typography,
  argTypes: {
    className: argTypesEnum.STRING,
    danger: argTypesEnum.BOOL_FALSE,
    dataTestId: argTypesEnum.STRING,
  },
};

const TemplateDefault = (args) => (
  <Typography>
    <Typography.Title>Introduction</Typography.Title>
    <Typography.Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Typography.Paragraph>
    <Typography.Paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
     
    </Typography.Paragraph>
    <Typography.Title level={2}>Guidelines and Resources</Typography.Title>
    <Typography.Paragraph>
      We supply a series of design principles, practical patterns and high quality design resources
      (<Typography.Text code>Sketch</Typography.Text> and <Typography.Text code>Axure</Typography.Text>), to help people create their product
      prototypes beautifully and efficiently.
    </Typography.Paragraph>

    <Typography.Paragraph>
      <ul>
        <li>
          <Typography.Link href="/docs/spec/proximity">Principles</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/spec/overview">Patterns</Typography.Link>
        </li>
        <li>
          <Typography.Link href="/docs/resources">Resource Download</Typography.Link>
        </li>
      </ul>
    </Typography.Paragraph>

    <Typography.Paragraph>
      Press <Typography.Text keyboard>Esc</Typography.Text> to exit...
    </Typography.Paragraph>
  </Typography>
);

const TemplateTitle = (args) => (
  <>
    <Typography.Title>h1. Ant Design</Typography.Title>
    <Typography.Title level={2}>h2. Ant Design</Typography.Title>
    <Typography.Title level={3}>h3. Ant Design</Typography.Title>
    <Typography.Title level={4}>h4. Ant Design</Typography.Title>
    <Typography.Title level={5}>h5. Ant Design</Typography.Title>
  </>
);

const TemplateText = (args) => (
  <Space direction="vertical">
    <Typography.Text>Ant Design (default)</Typography.Text>
    <Typography.Text type="secondary">Ant Design (secondary)</Typography.Text>
    <Typography.Text type="success">Ant Design (success)</Typography.Text>
    <Typography.Text type="warning">Ant Design (warning)</Typography.Text>
    <Typography.Text type="danger">Ant Design (danger)</Typography.Text>
    <Typography.Text disabled>Ant Design (disabled)</Typography.Text>
    <Typography.Text mark>Ant Design (mark)</Typography.Text>
    <Typography.Text code>Ant Design (code)</Typography.Text>
    <Typography.Text keyboard>Ant Design (keyboard)</Typography.Text>
    <Typography.Text underline>Ant Design (underline)</Typography.Text>
    <Typography.Text delete>Ant Design (delete)</Typography.Text>
    <Typography.Text strong>Ant Design (strong)</Typography.Text>
    <Typography.Text italic>Ant Design (italic)</Typography.Text>
    <Typography.Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Typography.Link>
  </Space>
);

const TemplateEdit = () => {
  const { Paragraph } = Typography;
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
  const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    'This is an editable text with limited length.',
  );
  
  return (
    <>
      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomIconStr,
        }}
      >
        {customIconStr}
      </Paragraph>
      <Paragraph editable={{ tooltip: false, onChange: setHideTooltipStr }}>
        {hideTooltipStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
      <Paragraph
        copyable={{
          icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
          tooltips: ['click here', 'you clicked!!'],
        }}
      >
        Custom Copy icon and replace tooltips text.
      </Paragraph>
      <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
    </>
  )
};

export const TypographyDefault = TemplateDefault.bind({});

export const TypographyTitle = TemplateTitle.bind({});

export const TypographyText = TemplateText.bind({});

export const TypographyEditable = TemplateEdit.bind({});
