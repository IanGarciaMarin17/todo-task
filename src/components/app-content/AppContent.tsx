import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { TodoContext } from '../todo-context/TodoContext';
import React, { useEffect } from 'react';
import { TodoCounter } from '../todo-counter/TodoCounter';
import { TodoSearch } from '../todo-search/TodoSearch';
import { TodoList } from '../todo-list/TodoList';
import { EmptyTodos } from '../empty-todos/EmptyTodos';
import { TodoItem } from '../todo-item/TodoItem';
import { CreateTodoButton } from '../create-todo-button/CreateTodoButton';
import { Modal } from '../modal/Modal';
import { TodoForm } from '../todo-form/TodoForm';
import { useDispatch } from 'react-redux';
import { TodoTask } from '../../store/todo-task/get-todo-task/get-todo-task.entity';
import { fetchGetTodoTask } from '../../store/todo-task/get-todo-task/get-todo-task.effect';
import { AppDispatch } from '../../store';
import styles from './AppContent.module.scss';

function AppContent(): JSX.Element {
  const { searchedTodos, openModal } = React.useContext(TodoContext);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGetTodoTask());
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
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
