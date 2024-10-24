import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { TodoContext } from '../todo-context/TodoContext';
import React, { useEffect, useState } from 'react';
import { TodoCounter } from '../todo-counter/TodoCounter';
import { TodoSearch } from '../todo-search/TodoSearch';
import { TodoList } from '../todo-list/TodoList';
import { EmptyTodos } from '../empty-todos/EmptyTodos';
import { TodoItem } from '../todo-item/TodoItem';
import { CreateTodoButton } from '../create-todo-button/CreateTodoButton';
import { Modal } from '../modal/Modal';
import { TodoForm } from '../todo-form/TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { TodoTask } from '../../store/todo-task/get-todo-task/get-todo-task.entity';
import { fetchGetTodoTask } from '../../store/todo-task/get-todo-task/get-todo-task.effect';
import { AppDispatch } from '../../store';
import styles from './AppContent.module.scss';
import { createTodoTaskSelector } from '../../store/todo-task/create-todo-task/create-todo-task.select';
import { Alert } from '../alert/Alert';

function AppContent(): JSX.Element {
  const { searchedTodos, openModal } = React.useContext(TodoContext);
  const [showAlert, setShowAlert] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const createTodoTaskResponse = useSelector(createTodoTaskSelector);

  useEffect(() => {
    dispatch(fetchGetTodoTask());
  }, []);

  useEffect(() => {
    if (createTodoTaskResponse.error) {
      setShowAlert(true);
    }
  }, [createTodoTaskResponse]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      {showAlert && (
        <Alert
          message="Error al crear TODO, intenta más tarde..."
          onClose={() => setShowAlert(false)}
        />
      )}
      <button className={styles.logoutButton} onClick={handleLogout}>
        <FaSignOutAlt />
      </button>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {!searchedTodos.length && <EmptyTodos />}
        {searchedTodos.map((todo: TodoTask) => (
          <TodoItem
            title={todo.title}
            description={todo.description}
            key={todo.id}
            id={todo.id ?? 0}
            completed={todo.completed ?? false}
          />
        ))}
      </TodoList>
      {!openModal && <CreateTodoButton />}

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { AppContent };
