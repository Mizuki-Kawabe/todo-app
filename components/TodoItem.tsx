"use client";

import { Todo } from "@/types";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onDelete} className="text-red-500 ml-2 hover:underline">
        削除
      </button>
    </div>
  );
}
