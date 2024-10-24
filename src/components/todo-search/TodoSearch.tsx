import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './TodoSearch.module.scss';
import { TodoContext } from '../todo-context/TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} />
      <input
        className={styles.TodoSearch}
        placeholder="Cortar Cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
