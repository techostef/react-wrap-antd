import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from '../Result';

const nameComponent = 'Result';

describe('Result test', () => {
  it(`${nameComponent} render without crash`, () => {
    const content = 'Result content';
    render((
      <div>
        <Result extra={content} title="Test Result" status="info" />
      </div>
    ));

    screen.getByText(content);
  });
})
