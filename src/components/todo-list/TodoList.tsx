import styles from './TodoList.module.scss';

function TodoList({ children }: { children: any }) {
  return <ul className={styles['TodoList']}>{children}</ul>;
}

export { TodoList };
