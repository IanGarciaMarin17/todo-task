import styles from './CreateTodoButton.module.scss';
import { TodoContext } from '../todo-context/TodoContext';
import React from 'react';

function CreateTodoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  return (
    <button
      className={styles['CreateTodoButton']}
      onClick={() => {
        setOpenModal(true);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
