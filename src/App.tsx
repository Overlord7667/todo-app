import React, { useState } from 'react';
import Accordion from './components/Accordion';
import TodoFooter from './components/TodoFooter';
import { Todo } from './types';
import './App.css';

const App: React.FC = () => {
  const initialTodos = [
    { id: '1', text: 'Тестовое задание', isCompleted: false },
    { id: '2', text: 'Прекрасный код', isCompleted: true },
    { id: '3', text: 'Покрытие тестами', isCompleted: false },
  ];

  const [todos1, setTodos1] = useState<Todo[]>(initialTodos);
  const [todos2, setTodos2] = useState<Todo[]>(initialTodos);
  const [todos3, setTodos3] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<string>('all');

  const toggleTodo = (todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const clearCompleted = (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, todos: Todo[]) => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  const filteredTodos = (todos: Todo[]) => {
    return todos.filter(todo => {
      if (filter === 'completed') return todo.isCompleted;
      if (filter === 'active') return !todo.isCompleted;
      return true;
    });
  };

  const itemsLeft = (todos: Todo[]) => todos.filter(todo => !todo.isCompleted).length;

  return (
    <div className="app-container">
      <div className="todo-container">
        
        {/* Первый список */}
        <Accordion title="What needs to be done?">
          <table className="todo-table">
            <tbody>
              {filteredTodos(todos1).map(todo => (
                <tr key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => toggleTodo(todos1, setTodos1, todo.id)}
                    />
                  </td>
                  <td>{todo.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <TodoFooter
            itemsLeft={itemsLeft(todos1)}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={() => clearCompleted(setTodos1, todos1)}
          />
        </Accordion>

        {/* Второй список */}
        <Accordion title="In Progress">
          <table className="todo-table">
            <tbody>
              {filteredTodos(todos2).map(todo => (
                <tr key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => toggleTodo(todos2, setTodos2, todo.id)}
                    />
                  </td>
                  <td>{todo.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <TodoFooter
            itemsLeft={itemsLeft(todos2)}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={() => clearCompleted(setTodos2, todos2)}
          />
        </Accordion>

        {/* Третий список */}
        <Accordion title="Completed">
          <table className="todo-table">
            <tbody>
              {filteredTodos(todos3).map(todo => (
                <tr key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => toggleTodo(todos3, setTodos3, todo.id)}
                    />
                  </td>
                  <td>{todo.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <TodoFooter
            itemsLeft={itemsLeft(todos3)}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={() => clearCompleted(setTodos3, todos3)}
          />
        </Accordion>

      </div>
    </div>
  );
};

export default App;