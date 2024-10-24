import axios, { AxiosResponse } from 'axios';

export const fetchDeleteTodoTaskApi = async (id: number): Promise<string> => {
  const axiosADLInstance = axios.create({ baseURL: 'http://localhost:4000' });
  return axiosADLInstance
    .delete<
      Record<string, never>,
      AxiosResponse<string>
    >(`/todo-tasks/tasks/${id}`, { headers: { 'x-authorization': 'bdb1234' } })
    .then((response) => response.data);
};
