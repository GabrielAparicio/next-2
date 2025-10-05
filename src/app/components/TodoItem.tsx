import { Todo } from './TodoList';

interface TodoItemProps {
  todo: Todo;
  onRemoveTodoHandler: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveTodoHandler }) => {
  const { text } = todo;
  return (
    <li>
      <span>{text}</span>
      <button onClick={onRemoveTodoHandler}>Remove Todo</button>
    </li>
  );
};

export default TodoItem;
