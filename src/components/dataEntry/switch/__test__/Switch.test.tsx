import React from 'react';
import { render, screen } from '@testing-library/react';
import Switch from '../Switch';

const componentName = 'Switch';

describe('Switch test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Switch data-testid="SwitchId"/>
    ));

    screen.getByTestId('SwitchId');
  });
})
