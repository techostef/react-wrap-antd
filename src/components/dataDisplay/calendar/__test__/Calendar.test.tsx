import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from '../Calendar';

const componentName = 'Calendar';

describe('Calendar test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <div data-testid={'Calendar'}>
        <Calendar/>
      </div>
    ));
    
    screen.getByTestId('Calendar')
  });
})
