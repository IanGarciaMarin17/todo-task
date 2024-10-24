import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TodoTask } from './get-todo-task.entity';

export const getTodoTaskState = createSlice({
  name: 'GetTodoTaskState',
  initialState,
  reducers: {
    fetchGetTodoTaskSuccess(state, { payload }: PayloadAction<TodoTask[]>) {
      return {
        ...state,
        taskList: payload.map((task) => ({ ...task })),
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

export const getTodoTaskActions = getTodoTaskState.actions;
