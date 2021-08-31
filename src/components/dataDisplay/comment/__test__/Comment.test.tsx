import React from 'react';
import { render, screen } from '@testing-library/react';
import Comment from '../Comment';
import { Avatar } from 'antd';

const componentName = 'Comment';

describe('Comment test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      }
      data-testid={'Comment'}
    >
      Text
    </Comment>
    ));
    
    screen.getByTestId('Comment')
  });
})
