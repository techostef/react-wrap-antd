import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

const componentName = 'Badge';

describe('Badge test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <Badge data-testid={'Badge'}>
        { text }
      </Badge>
    ));
    
    screen.getByTestId('Badge');
  });
})
