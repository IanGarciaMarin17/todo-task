import React from 'react';
import { TodoTask } from '../../store/todo-task/get-todo-task/get-todo-task.entity';
import { useSelector } from 'react-redux';
import { getTodoTaskListSelector } from '../../store/todo-task/get-todo-task/get-todo-task.select';

interface TodoContextType {
  totalTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTodos: TodoTask[];
  completedTodos: number;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: TodoContextType = {
  totalTodos: 0,
  searchValue: '',
  setSearchValue: () => {},
  searchedTodos: [],
  completedTodos: 0,
  openModal: false,
  setOpenModal: () => {},
};

const TodoContext = React.createContext<TodoContextType>(defaultValue);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const listTodoTask = useSelector(getTodoTaskListSelector);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = listTodoTask.filter(
    (todo: TodoTask) => todo.completed
  ).length;
  const totalTodos = listTodoTask.length;
  const searchedTodos = listTodoTask.filter((todo: TodoTask) =>
    todo.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completedTodos,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
