import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../Pagination';

const componentName = 'Pagination';

describe('PageHeader test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <Pagination
        defaultCurrent={1}
        total={200}
        onShowSizeChange={() => {}}
      />
    ));
  });
})