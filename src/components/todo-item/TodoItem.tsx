import React from 'react';
import styles from './TodoItem.module.scss';
import { CompleteIcon } from '../../icons/CompleteIcon';
import { DeleteIcon } from '../../icons/DeleteIcon';

function TodoItem(props: {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}) {
  return (
    <li className={styles['TodoItem']}>
      <CompleteIcon id={props.id} completed={props.completed} />
      <div className={styles['TodoItem-content']}>
        <p
          className={`${styles['TodoItem-p']} ${props.completed ? styles['TodoItem-p--complete'] : ''}`}
        >
          {props.title}
        </p>
        <p
          className={`${styles['TodoItem-p']} ${props.completed ? styles['TodoItem-p--complete'] : ''}`}
        >
          {props.description}
        </p>
      </div>
      <DeleteIcon id={props.id} />
    </li>
  );
}

export { TodoItem };
