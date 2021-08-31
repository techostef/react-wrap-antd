import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '../Checkbox';

const componentName = 'Checkbox';

describe('Checkbox test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Checkbox data-testid="CheckboxId"/>
    ));

    screen.getByTestId('CheckboxId');
  });
})
