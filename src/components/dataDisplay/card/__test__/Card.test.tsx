import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

const componentName = 'Card';

describe('Card test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <Card data-testid={'Card'}>
        { text }
      </Card>
    ));
    
    screen.getByTestId('Card')
  });
})
