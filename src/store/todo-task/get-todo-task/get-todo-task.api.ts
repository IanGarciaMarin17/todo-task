import axios, { AxiosResponse } from 'axios';
import { TodoTask } from './get-todo-task.entity';

export const fetchGetTodoTaskApi = async (): Promise<TodoTask[]> => {
  const axiosADLInstance = axios.create({ baseURL: 'http://localhost:4000' });
  return axiosADLInstance
    .get<
      Record<string, never>,
      AxiosResponse<TodoTask[]>
    >('/todo-tasks/tasks', { headers: { 'x-authorization': 'bdb1234' } })
    .then((response) => response.data);
};
