import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from '../PageHeader';

const componentName = 'PageHeader';

describe('PageHeader test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    ));
  });
})
