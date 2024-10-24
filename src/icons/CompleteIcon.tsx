import { TodoIcon } from './TodoIcon';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchUpdateTodoTaskComplete } from '../store/todo-task/update-todo-task/update-todo-task.effect';
import { fetchGetTodoTask } from '../store/todo-task/get-todo-task/get-todo-task.effect';

function CompleteIcon({ id, completed }: { id: number; completed: boolean }) {
  const dispatch: AppDispatch = useDispatch();
  const completeTask = async (): Promise<void> => {
    await dispatch(fetchUpdateTodoTaskComplete(id));
    dispatch(fetchGetTodoTask());
  };

  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'black'}
      onClick={completeTask}
    />
  );
}

export { CompleteIcon };
