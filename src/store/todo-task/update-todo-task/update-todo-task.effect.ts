import { Dispatch } from '@reduxjs/toolkit';
import { fetchUpdateTodoTaskCompleteApi } from './update-todo-task.api';
import { updateTodoTaskActions } from './update-todo-task.reducer';
import { mapTodoTaskRespose } from '../../../utils/todo-task.util';

export const fetchUpdateTodoTaskComplete = (id: number) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = mapTodoTaskRespose(await fetchUpdateTodoTaskCompleteApi(id));
      dispatch(updateTodoTaskActions.fetchUpdateTodoTaskSuccess(data));
    } catch (error: any) {
      dispatch(updateTodoTaskActions.setError(error));
    }
  };
};
