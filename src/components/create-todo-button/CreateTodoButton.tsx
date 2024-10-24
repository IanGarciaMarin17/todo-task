import styles from './CreateTodoButton.module.scss';
import { TodoContext } from '../todo-context/TodoContext';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodoTaskActions } from '../../store/todo-task/create-todo-task/create-todo-task.reducer';
import { AppDispatch } from '../../store';

function CreateTodoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className={styles['CreateTodoButton']}
      onClick={() => {
        dispatch(createTodoTaskActions.reset());
        setOpenModal(true);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
