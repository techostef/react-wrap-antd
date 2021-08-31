import React from 'react';
import { render, screen } from '@testing-library/react';
import Descriptions from '../Descriptions';

const componentName = 'Descriptions';

describe('Descriptions test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <div  data-testid={'Description'}>
         <Descriptions title="User Info">
        </Descriptions>
      </div>
    ));
    
    screen.getByTestId('Description')
  });
})
