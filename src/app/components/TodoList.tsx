'use client';

import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodoHandler = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoForm onAddTodoHandler={addTodoHandler} />
      <ul>
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            onRemoveTodoHandler={() => removeTodoHandler(i)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
