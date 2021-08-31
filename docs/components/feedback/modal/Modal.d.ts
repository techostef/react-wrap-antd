import React from 'react';
import { Modal as ModalComp, ModalProps } from 'antd';
interface IModal extends ModalProps {
}
declare const Modal: React.FC<IModal> & {
    info: typeof ModalComp.info;
    success: typeof ModalComp.success;
    error: typeof ModalComp.error;
    warning: typeof ModalComp.warning;
    confirm: typeof ModalComp.confirm;
};
export default Modal;
