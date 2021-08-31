import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from '../Row';

const nameComponent = 'Row';

describe('Row test', () => {
  it(`${nameComponent} render without crash`, () => {
    const text = 'Row content';
    render((
      <Row data-testid="RowId">
        { text }
      </Row>
    ));

    screen.getByTestId("RowId");
  });
})
