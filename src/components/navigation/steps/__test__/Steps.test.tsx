import React from 'react';
import { render, screen } from '@testing-library/react';
import Steps from '../Steps';
import './matchMedia.mock';

const componentName = 'Steps';

describe('Affix test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <Steps current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
    ));
  });
})
