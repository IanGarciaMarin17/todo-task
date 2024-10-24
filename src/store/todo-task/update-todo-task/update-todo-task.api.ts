import axios, { AxiosResponse } from 'axios';
import {Encrypt} from "../../../utils/encrypt";

export const fetchUpdateTodoTaskCompleteApi = async (
  id: number
): Promise<string> => {
  const axiosADLInstance = axios.create({ baseURL: 'http://localhost:4000' });
  return axiosADLInstance
    .put<
      Record<string, never>,
      AxiosResponse<any>
    >(`/todo-tasks/tasks/complete/${id}`, {},{ headers: { 'x-authorization': 'bdb1234' } })
    .then((response) => Encrypt.decrypt(response.data));
};
