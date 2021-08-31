import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

const nameComponent = 'ToggleButton';

describe('Layout test', () => {
  it(`${nameComponent} render without crash`, () => {
    const content = 'Layout content';
    render(
      <Layout data-testid="LayoutId">
        { content }
      </Layout>
    );

    screen.getByTestId("LayoutId");
  });
});

