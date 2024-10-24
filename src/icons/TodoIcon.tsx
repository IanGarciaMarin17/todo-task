import React from 'react';
import { ReactComponent as CheckSVG } from '../check.svg';
import { ReactComponent as DeleteSVG } from '../delete.svg';
import styles from './TodoIcon.module.scss';

const iconTypes = {
  check: (color: string) => (
    <CheckSVG className={styles['Icon-svg']} fill={color} />
  ),
  delete: (color: string) => (
    <DeleteSVG className={styles['Icon-svg']} fill={color} />
  ),
};

function TodoIcon({
  type,
  color,
  onClick,
}: {
  type: 'check' | 'delete';
  color: 'black' | 'red' | 'green';
  onClick: () => void;
}) {
  return (
    <span
      className={`${styles['Icon-container']} ${styles[`Icon-container-${[type]}`]}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
