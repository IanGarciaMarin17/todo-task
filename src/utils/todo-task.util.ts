import { TodoTask } from '../store/todo-task/todo-task.entity';

export const mapTodoTaskRespose = (response: string): TodoTask => {
  return {
    message: response,
    status: 200,
  };
};
