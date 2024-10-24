import { TodoTaskState } from '../todo-task.entity';
import { RootState } from '../../index';

export const updateTodoTaskSelector = (state: RootState): TodoTaskState =>
  state.updateTodoTaskState;
