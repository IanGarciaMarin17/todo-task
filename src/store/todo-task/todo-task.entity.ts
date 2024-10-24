export interface TodoTask {
  message: string;
  status: number;
}

export interface TodoTaskState {
  result: TodoTask | null;
  error: Error | null;
}

export const initialState: TodoTaskState = {
  result: null,
  error: null,
};
