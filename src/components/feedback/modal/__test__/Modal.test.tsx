import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

const nameComponent = 'Modal';

describe('Modal test', () => {
  it(`${nameComponent} render without crash`, () => {
    const content = 'Modal content';
    render((
      <Modal title="Test modal" data-testid="ModalId">
        {content}
      </Modal>
    ));

    screen.findByTestId('ModalId');
  });
})
