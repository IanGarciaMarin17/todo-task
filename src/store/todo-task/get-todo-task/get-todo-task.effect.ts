import { Dispatch } from '@reduxjs/toolkit';
import { getTodoTaskActions } from './get-todo-task.reducer';
import { fetchGetTodoTaskApi } from './get-todo-task.api';

export const fetchGetTodoTask = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = await fetchGetTodoTaskApi();
      dispatch(getTodoTaskActions.fetchGetTodoTaskSuccess(data));
    } catch (error: any) {
      dispatch(getTodoTaskActions.setError(error));
    }
  };
};
