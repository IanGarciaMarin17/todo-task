import { TodoIcon } from './TodoIcon';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchDeleteTodoTask } from '../store/todo-task/delete-todo-task/delete-todo-task.effect';
import { fetchGetTodoTask } from '../store/todo-task/get-todo-task/get-todo-task.effect';

function DeleteIcon({ id }: { id: number }) {
  const dispatch: AppDispatch = useDispatch();
  const deleteTask = async () => {
    await dispatch(fetchDeleteTodoTask(id));
    dispatch(fetchGetTodoTask());
  };
  return <TodoIcon type="delete" color="black" onClick={deleteTask} />;
}

export { DeleteIcon };
