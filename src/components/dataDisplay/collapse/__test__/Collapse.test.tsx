import React from 'react';
import { render, screen } from '@testing-library/react';
import Collapse from '../Collapse';

const componentName = 'Collapse';

describe('Collapse test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <div data-testid={'Collapse'}>
        <Collapse defaultActiveKey={['1']} onChange={() => {}}>
          <Collapse.Panel header="This is panel header 1" key="1">
            <p>Hello</p>
          </Collapse.Panel>
        </Collapse>
      </div>
    ));
    
    screen.getByTestId('Collapse')
  });
})
