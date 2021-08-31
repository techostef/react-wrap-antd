import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

const componentName = 'Table';

describe('Table test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Table data-testid="TableId"/>
    ));

    screen.getByTestId('TableId');
  });
})
