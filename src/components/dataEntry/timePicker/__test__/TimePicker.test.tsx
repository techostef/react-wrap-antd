import React from 'react';
import { render, screen } from '@testing-library/react';
import TimePicker from '../TimePicker';

const componentName = 'TimePicker';

describe('TimePicker test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <TimePicker data-testid="TimePickerId"/>
    ));

    screen.getByTestId('TimePickerId');
  });
})
