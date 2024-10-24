import axios, { AxiosResponse } from 'axios';
import { TodoTask } from '../get-todo-task/get-todo-task.entity';
import {Encrypt} from "../../../utils/encrypt";

export const fetchCreateTodoTaskApi = async (
  todoTask: TodoTask
): Promise<string> => {
  const axiosADLInstance = axios.create({ baseURL: 'http://localhost:4000' });
  const encryptedBody = Encrypt.encrypt(JSON.stringify(todoTask));
  return axiosADLInstance
    .post<
      Record<string, never>,
      AxiosResponse<string>
    >('/todo-tasks/tasks', {encryptedBody}, { headers: { 'x-authorization': 'bdb1234' } })
    .then((response) => Encrypt.decrypt(response.data));
};
