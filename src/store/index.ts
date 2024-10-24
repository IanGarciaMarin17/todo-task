import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getTodoTaskState } from './todo-task/get-todo-task/get-todo-task.reducer';
import { updateTodoTaskState } from './todo-task/update-todo-task/update-todo-task.reducer';
import { deleteTodoTaskState } from './todo-task/delete-todo-task/delete-todo-task.reducer';
import { createTodoTaskState } from './todo-task/create-todo-task/create-todo-task.reducer';

const appReducer = combineReducers({
  getTodoTaskState: getTodoTaskState.reducer,
  updateTodoTaskState: updateTodoTaskState.reducer,
  deleteTodoTaskState: deleteTodoTaskState.reducer,
  createTodoTaskState: createTodoTaskState.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'UNMOUNT') {
    return appReducer(undefined, action);
  }

  if (action.type === 'MOUNT') {
    return appReducer(state, action);
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
