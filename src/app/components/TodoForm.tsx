import { useState } from 'react';
import { Todo } from './TodoList';

interface TodoFormProps {
  onAddTodoHandler: (t: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodoHandler }) => {
  const [todoText, setTodoText] = useState('');

  const onInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setTodoText(event.target.value);
  };

  const onClickHadler = () => {
    const newTodo: Todo = { text: todoText, completed: false };
    onAddTodoHandler(newTodo);
  };

  return (
    <p>
      <input type="text" value={todoText} onChange={onInputChangeHandler} />
      <button onClick={onClickHadler}>Add TODO</button>
    </p>
  );
};

export default TodoForm;
