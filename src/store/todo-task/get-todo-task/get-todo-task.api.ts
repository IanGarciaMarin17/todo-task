import axios, { AxiosResponse } from 'axios';
import { TodoTask } from './get-todo-task.entity';
import {Encrypt} from "../../../utils/encrypt";

export const fetchGetTodoTaskApi = async (): Promise<TodoTask[]> => {
  const axiosADLInstance = axios.create({ baseURL: 'http://localhost:4000' });
  return axiosADLInstance
    .get<
      Record<string, never>,
      AxiosResponse<string>
    >('/todo-tasks/tasks', { headers: { 'x-authorization': 'bdb1234' } })
    .then((response) => {
      const decryptedData = Encrypt.decrypt(response.data);
      return JSON.parse(decryptedData) as TodoTask[];
    });
};
