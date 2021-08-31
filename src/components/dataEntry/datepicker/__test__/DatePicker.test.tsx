import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Datepicker from '../Datepicker';

const componentName = 'Datepicker';

describe('Datepicker test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Datepicker data-testid="DatepickerId"/>
    ));

    screen.getByTestId('DatepickerId');
  });
})
