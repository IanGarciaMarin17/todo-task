import styles from './EmptyTodos.module.scss';

function EmptyTodos() {
  return (
    <div className={styles['contenedor']}>
      <p className="text-2xl text-gray-400">Agregue una nueva tarea</p>
      <img
        src="/todotask.ico"
        alt="Todo Task Icon"
        className={styles['icon']}
      />
    </div>
  );
}

export { EmptyTodos };
