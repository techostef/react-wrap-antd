import React from 'react';
import { ButtonProps } from 'antd';
export declare enum ButtonType {
    default = "default",
    dashed = "dashed",
    ghost = "ghost",
    primary = "primary",
    text = "text",
    link = "link"
}
export declare enum ButtonSize {
    middle = "middle",
    large = "large",
    small = "small"
}
export declare enum ButtonShape {
    circle = "circle",
    round = "round",
    default = "default"
}
export declare enum ButtonHtmlType {
    button = "button",
    submit = "submit",
    reset = "reset"
}
interface IButton extends ButtonProps {
}
declare const _default: React.NamedExoticComponent<IButton>;
export default _default;
