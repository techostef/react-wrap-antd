import React from 'react';
import { Form as FormComp, FormProps } from 'antd';

export enum FormLabelAlign {
  left = 'left',
  right = 'right',
}

export enum FormLayout {
  horizontal = 'horizontal',
  vertical = 'vertical',
  inline = 'inline',
}

interface IForm extends FormProps {
}

const Form: React.FC<IForm> & {
  Item: typeof FormComp.Item,
  List: typeof FormComp.List,
  useForm: typeof FormComp.useForm,
} = ({children, ...props}) => {

  return (
    <FormComp
      {...props}
    >
      { children }
    </FormComp>
  );
};

Form.Item = FormComp.Item;
Form.List = FormComp.List;
Form.useForm = FormComp.useForm;

export default Form;
