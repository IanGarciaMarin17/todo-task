import ReactDOM from 'react-dom';
import React from 'react';
import styles from './Modal.module.scss';

function Modal({ children }: { children: React.ReactNode }) {
  const modalRoot = document.getElementById('modal');
  return ReactDOM.createPortal(
    <div className={styles['ModalBackground']}>{children}</div>,
    modalRoot as Element
  );
}

export { Modal };
