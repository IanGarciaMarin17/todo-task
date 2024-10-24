import styles from './TodoLoading.module.scss';

function TodoLoading() {
  return (
    <div className={styles['LoadingTodo-container']}>
      <span className={styles['LoadingTodo-completeIcon']}></span>
      <p className={styles['LoadingTodo-text']}></p>
      <span className={styles['LoadingTodo-deleteIcon']}></span>
    </div>
  );
}

export { TodoLoading };
