import React from 'react';
import styles from './TodoCounter.module.scss';
import { TodoContext } from '../todo-context/TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  const message =
    completedTodos === totalTodos && totalTodos !== 0
      ? '¡Felicidades completaste tus <strong>TODOS</strong>! 🎉'
      : `Has completado <strong>${completedTodos}</strong> de <strong>${totalTodos}</strong> TODOS`;
  return (
    <h1
      className={styles['TodoCounter']}
      dangerouslySetInnerHTML={{ __html: message }}
    />
  );
}

export { TodoCounter };
