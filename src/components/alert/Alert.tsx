import React from 'react';
import styles from './Alert.module.scss';

function Alert({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className={styles['alert-container']}>
      <div className={styles['alert']}>
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export { Alert };
