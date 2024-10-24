import { TodoTask, TodoTaskState } from './get-todo-task.entity';
import { RootState } from '../../index';

const todoTaskSelector = (state: RootState): TodoTaskState =>
  state.getTodoTaskState;

export const getTodoTaskListSelector = (state: RootState): TodoTask[] =>
  todoTaskSelector(state).taskList;
