import { TodoTaskState } from '../todo-task.entity';
import { RootState } from '../../index';

export const deleteTodoTaskSelector = (state: RootState): TodoTaskState =>
  state.deleteTodoTaskState;
