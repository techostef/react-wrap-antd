import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from '../Tabs';

const componentName = 'Tabs';

describe('Tabs test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Tabs data-testid="TabsId"/>
    ));

    screen.getByTestId('TabsId');
  });
})
