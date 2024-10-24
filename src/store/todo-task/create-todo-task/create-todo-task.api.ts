import axios, { AxiosResponse } from 'axios';
import { TodoTask } from '../get-todo-task/get-todo-task.entity';

export const fetchCreateTodoTaskApi = async (
  todoTask: TodoTask
): Promise<string> => {
  const axiosADLInstance = axios.create({ baseURL: 'http://localhost:4000' });
  return axiosADLInstance
    .post<
      Record<string, never>,
      AxiosResponse<string>
    >('/todo-tasks/tasks', todoTask, { headers: { 'x-authorization': 'bdb1234' } })
    .then((response) => response.data);
};
