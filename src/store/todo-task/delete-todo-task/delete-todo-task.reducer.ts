import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TodoTask } from '../todo-task.entity';

export const deleteTodoTaskState = createSlice({
  name: 'DeleteTodoTaskState',
  initialState,
  reducers: {
    fetchDeleteTodoTaskSuccess(state, { payload }: PayloadAction<TodoTask>) {
      return {
        ...state,
        result: payload,
      };
    },
    setError(state, { payload }: PayloadAction<Error>) {
      return {
        ...state,
        error: payload,
      };
    },
  },
});

export const deleteTodoTaskActions = deleteTodoTaskState.actions;
