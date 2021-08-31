import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { MailOutlined } from '@ant-design/icons';
import Menu from '../Menu';

const componentName = 'Menu';

describe('Menu test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <Menu onClick={() => {}} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
      </Menu>
    ));
  });
})
