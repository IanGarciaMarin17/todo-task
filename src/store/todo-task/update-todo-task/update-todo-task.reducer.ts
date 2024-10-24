import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TodoTask } from '../todo-task.entity';

export const updateTodoTaskState = createSlice({
  name: 'UpdateTodoTaskState',
  initialState,
  reducers: {
    fetchUpdateTodoTaskSuccess(state, { payload }: PayloadAction<TodoTask>) {
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
    reset() {
      return initialState;
    },
  },
});

export const updateTodoTaskActions = updateTodoTaskState.actions;
