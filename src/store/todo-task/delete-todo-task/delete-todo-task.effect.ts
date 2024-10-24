import { Dispatch } from '@reduxjs/toolkit';
import { fetchDeleteTodoTaskApi } from './delete-todo-task.api';
import { deleteTodoTaskActions } from './delete-todo-task.reducer';
import { mapTodoTaskRespose } from '../../../utils/todo-task.util';

export const fetchDeleteTodoTask = (id: number) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = mapTodoTaskRespose(await fetchDeleteTodoTaskApi(id));
      dispatch(deleteTodoTaskActions.fetchDeleteTodoTaskSuccess(data));
    } catch (error: any) {
      dispatch(deleteTodoTaskActions.setError(error));
    }
  };
};
