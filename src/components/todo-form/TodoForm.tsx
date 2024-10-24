import React, { useState } from 'react';
import styles from './TodoForm.module.scss';
import { TodoContext } from '../todo-context/TodoContext';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { fetchCreateTodoTask } from '../../store/todo-task/create-todo-task/create-todo-task.effect';
import { fetchGetTodoTask } from '../../store/todo-task/get-todo-task/get-todo-task.effect';

function TodoForm() {
  const { setOpenModal } = React.useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (!newTodoTitle || !newTodoDescription) {
      setError('El título y la descripción son obligatorios.');
      return;
    }
    const todoTask = {
      title: newTodoTitle,
      description: newTodoDescription,
    };
    await dispatch(fetchCreateTodoTask(todoTask));
    dispatch(fetchGetTodoTask());
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeTitle = (event: any) => {
    setNewTodoTitle(event.target.value);
    setError('');
  };

  const onChangeDescription = (event: any) => {
    setNewTodoDescription(event.target.value);
    setError('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <input
        className={styles['TodoForm-input']}
        type="text"
        placeholder="Escriba su título"
        value={newTodoTitle}
        onChange={onChangeTitle}
      />
      <textarea
        placeholder="Cortar la cebolla para el almuerzo"
        value={newTodoDescription}
        onChange={onChangeDescription}
      />
      {error && <p className={styles['error']}>{error}</p>}
      <div className={styles['TodoForm-buttonContainer']}>
        <button
          className={`${styles['TodoForm-button']} ${styles['TodoForm-button--cancel']}`}
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className={`${styles['TodoForm-button']} ${styles['TodoForm-button--add']}`}
          type="submit"
        >
          Crear
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
