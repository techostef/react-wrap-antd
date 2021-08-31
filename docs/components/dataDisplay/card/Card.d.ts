import React from 'react';
import { Card as Cardcomp, CardProps } from 'antd';
export declare enum CardSize {
    default = "default",
    small = "small"
}
interface ICard extends CardProps {
}
declare const Card: React.FC<ICard> & {
    Grid: typeof Cardcomp.Grid;
    Meta: typeof Cardcomp.Meta;
};
export default Card;
