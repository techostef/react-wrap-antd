import React from 'react';
import { render, screen } from '@testing-library/react';
import Col from '../Col';

const nameComponent = 'Col';

describe('Col test', () => {
  it(`${nameComponent} render without crash`, () => {
    const text = 'Col content';
    render((
      <Col data-testid={'ColId'}>
        { text }
      </Col>
    ));

    screen.getByTestId('ColId');
  });
})
