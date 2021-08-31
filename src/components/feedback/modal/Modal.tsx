import React from 'react';
import { Modal as ModalComp, ModalProps } from 'antd';

interface IModal extends ModalProps {}

const Modal: React.FC<IModal> & {
  info: typeof ModalComp.info,
  success: typeof ModalComp.success,
  error: typeof ModalComp.error,
  warning: typeof ModalComp.warning,
  confirm: typeof ModalComp.confirm,
} = (props) => {
  return (
    <ModalComp {...props} />
  )
}

Modal.info = ModalComp.info;
Modal.success = ModalComp.success;
Modal.error = ModalComp.error;
Modal.warning = ModalComp.warning;
Modal.confirm = ModalComp.confirm;

export default Modal;
