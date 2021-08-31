import React from 'react';
import { Form as FormComp, FormProps } from 'antd';
export declare enum FormLabelAlign {
    left = "left",
    right = "right"
}
export declare enum FormLayout {
    horizontal = "horizontal",
    vertical = "vertical",
    inline = "inline"
}
interface IForm extends FormProps {
}
declare const Form: React.FC<IForm> & {
    Item: typeof FormComp.Item;
    List: typeof FormComp.List;
    useForm: typeof FormComp.useForm;
};
export default Form;
