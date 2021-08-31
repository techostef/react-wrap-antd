import React from 'react';
import { render, screen } from '@testing-library/react';
import Popover from '../Popover';
import { Button } from 'antd';

const componentName = 'Popover';

describe('Popover test', () => {
  it(`${componentName} render without crash`, () => {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    
    render((
      <div data-testid={'Popover'}>
        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
      </div>
    ));
    
    screen.getByTestId('Popover')
  });
})
