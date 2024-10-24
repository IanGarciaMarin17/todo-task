export interface TodoTask {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}

export interface TodoTaskState {
  taskList: TodoTask[];
  error: Error | null;
}

export const initialState: TodoTaskState = {
  taskList: [] as TodoTask[],
  error: null,
};
