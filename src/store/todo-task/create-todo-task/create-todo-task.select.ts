import { TodoTaskState } from '../todo-task.entity';
import { RootState } from '../../index';

export const createTodoTaskSelector = (state: RootState): TodoTaskState =>
  state.createTodoTaskState;
