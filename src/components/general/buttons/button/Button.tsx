import React from 'react';
import { Button as ButtonComp, ButtonProps } from 'antd';

export enum ButtonType {
  default = 'default',
  dashed = 'dashed',
  ghost = 'ghost',
  primary = 'primary',
  text = 'text',
  link = 'link',
}

export enum ButtonSize {
  middle = 'middle',
  large = 'large',
  small = 'small',
}

export enum ButtonShape {
  circle = 'circle',
  round = 'round',
  default = 'default',
}

export enum ButtonHtmlType {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}

interface IButton extends ButtonProps {
}

const Button: React.FC<IButton> = (props) => {
  return (
    <ButtonComp
      {...props}
    >
      {props.children}
    </ButtonComp>
  );
};

export default React.memo(Button);
