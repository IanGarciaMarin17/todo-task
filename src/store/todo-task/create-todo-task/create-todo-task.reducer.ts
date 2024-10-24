import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TodoTask } from '../todo-task.entity';

export const createTodoTaskState = createSlice({
  name: 'CreateTodoTaskState',
  initialState,
  reducers: {
    fetchCreateTodoTaskSuccess(state, { payload }: PayloadAction<TodoTask>) {
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

export const createTodoTaskActions = createTodoTaskState.actions;
