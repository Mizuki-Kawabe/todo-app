"use client";

import { useState } from "react";
import { Todo } from "@/types";
import TodoItem from "@/components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">ToDo アプリ</h1>
      <div className="flex mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border flex-1 p-2 rounded-l"
          placeholder="タスクを入力..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          追加
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </main>
  );
}
