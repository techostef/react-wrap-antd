import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';
import { UserOutlined } from '@ant-design/icons';

const componentName = 'Avatar';

describe('Avatar test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <Avatar
        icon={<UserOutlined />}
        onError={() => false}
        size="default"
        data-testid={'Avatar'}
      />
    ));
    
    screen.getByTestId('Avatar');
  });
})
