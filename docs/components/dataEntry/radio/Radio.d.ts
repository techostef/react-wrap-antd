import React from 'react';
import { Radio as RadioComp, RadioProps } from 'antd';
interface IRadio extends RadioProps {
}
declare const Radio: React.FC<IRadio> & {
    Button: typeof RadioComp.Button;
    Group: typeof RadioComp.Group;
};
export default Radio;
