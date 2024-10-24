import { Dispatch } from '@reduxjs/toolkit';
import { fetchCreateTodoTaskApi } from './create-todo-task.api';
import { createTodoTaskActions } from './create-todo-task.reducer';
import { TodoTask } from '../get-todo-task/get-todo-task.entity';
import { mapTodoTaskRespose } from '../../../utils/todo-task.util';

export const fetchCreateTodoTask = (todoTask: TodoTask) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = mapTodoTaskRespose(await fetchCreateTodoTaskApi(todoTask));
      dispatch(createTodoTaskActions.fetchCreateTodoTaskSuccess(data));
    } catch (error: any) {
      dispatch(createTodoTaskActions.setError(error));
    }
  };
};
