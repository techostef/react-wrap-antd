import React from 'react';
import { render, screen } from '@testing-library/react';
import Popconfirm from '../Popconfirm';

const nameComponent = 'Popconfirm';

describe('Popconfirm test', () => {
  it(`${nameComponent} render without crash`, () => {
    render((
      <Popconfirm title="Test popconfirm" data-testid="PopconfirmId" />
    ));

    screen.findByTestId('PopconfirmId');
  });
})
