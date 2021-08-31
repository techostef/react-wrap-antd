import React from 'react';
import { Card as Cardcomp, CardProps } from 'antd';

export enum CardSize {
  default = 'default',
  small = 'small',
}

interface ICard extends CardProps {}

const Card: React.FC<ICard> & {
  Grid: typeof Cardcomp.Grid,
  Meta: typeof Cardcomp.Meta,
} = (props) => {
  return (
   <Cardcomp {...props} />
  );
};

Card.Grid = Cardcomp.Grid
Card.Meta = Cardcomp.Meta

export default Card;

