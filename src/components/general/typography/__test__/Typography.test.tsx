import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Typography from '../Typography';

const componentName = 'Typography';

describe('Typography test render', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <Typography>
        { text }
      </Typography>
    ));
  });

  it(`${componentName} Link render without crash`, () => {
    render((
      <Typography>
        <Typography.Link>
          text
        </Typography.Link>
      </Typography>
    ));

    screen.getByText('text');
  });

  it(`${componentName} Paragraph render without crash`, () => {
    render((
      <Typography>
        <Typography.Paragraph>
          text
        </Typography.Paragraph>
      </Typography>
    ));

    screen.getByText('text');
  });

  it(`${componentName} Text render without crash`, () => {
    render((
      <Typography>
        <Typography.Text>
          text
        </Typography.Text>
      </Typography>
    ));

    screen.getByText('text');
  });

  it(`${componentName} Title render without crash`, () => {
    render((
      <Typography>
        <Typography.Title>
          text
        </Typography.Title>
      </Typography>
    ));

    screen.getByText('text');
  });
})

describe('Typography test event', () => {
  it(`${componentName} Paragraph onClick`, () => {
    let value = false;
    const valueExpect = true;

    const onClick = () => value = valueExpect;

    const { Link } = Typography;

    render((
      <Typography >
        <Link onClick={onClick}>
          text
        </Link>
      </Typography>
    ));

    userEvent.click(screen.getByText('text'));

    expect(valueExpect).toBe(value);
  });

  it(`${componentName} Paragraph onClick`, () => {
    let value = false;
    const valueExpect = true;

    const onClick = () => value = valueExpect;

    const { Paragraph } = Typography;

    render((
      <Typography>
        <Paragraph onClick={onClick}>
          text
        </Paragraph>
      </Typography>
    ));

    userEvent.click(screen.getByText('text'));

    expect(valueExpect).toBe(value);
  });

  it(`${componentName} Text onClick`, () => {
    let value = false;
    const valueExpect = true;

    const onClick = () => value = valueExpect;

    const { Text } = Typography;

    render((
      <Typography>
        <Text onClick={onClick}>
          text
        </Text>
      </Typography>
    ));

    userEvent.click(screen.getByText('text'));

    expect(valueExpect).toBe(value);
  });

  it(`${componentName} Title onClick`, () => {
    let value = false;
    const valueExpect = true;

    const onClick = () => value = valueExpect;

    const { Title } = Typography;

    render((
      <Typography>
        <Title onClick={onClick}>
          text
        </Title>
      </Typography>
    ));

    userEvent.click(screen.getByText('text'));

    expect(valueExpect).toBe(value);
  });
})
