import React from 'react';
import styles from './Alert.module.scss';
import { createTodoTaskActions } from '../../store/todo-task/create-todo-task/create-todo-task.reducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { deleteTodoTaskActions } from '../../store/todo-task/delete-todo-task/delete-todo-task.reducer';
import { updateTodoTaskActions } from '../../store/todo-task/update-todo-task/update-todo-task.reducer';

function Alert({ message, onClose }: { message: string; onClose: () => void }) {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className={styles['alert-container']}>
      <div className={styles['alert']}>
        <p>{message}</p>
        <button
          onClick={() => {
            dispatch(createTodoTaskActions.reset());
            dispatch(deleteTodoTaskActions.reset());
            dispatch(updateTodoTaskActions.reset());
            onClose();
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export { Alert };
