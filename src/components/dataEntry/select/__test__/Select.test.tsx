import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../Select';

const componentName = 'Select';

describe('Select test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Select data-testid="SelectId"/>
    ));

    screen.getByTestId('SelectId');
  });
})
