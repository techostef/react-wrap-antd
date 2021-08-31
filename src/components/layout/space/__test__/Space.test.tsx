import React from 'react';
import { render, screen } from '@testing-library/react';
import Space from '../Space';

const nameComponent = 'Space';

describe('Space test', () => {
  it(`${nameComponent} render without crash`, () => {
    const text = 'The title';
    render((
      <Space data-testid="SpaceId">
        { text }
      </Space>
    ));

    screen.getByTestId("SpaceId");
  });
})
