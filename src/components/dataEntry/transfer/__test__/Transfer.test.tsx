import React from 'react';
import { render, screen } from '@testing-library/react';
import Transfer from '../Transfer';

const componentName = 'Transfer';

describe('Transfer test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <div
        data-testid="TransferId"
      >
        <Transfer dataSource={[]}/>
      </div>
    ));

    screen.getByTestId('TransferId');
  });
})
