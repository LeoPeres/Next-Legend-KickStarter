"use client";

import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function OptimisticTodo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn Next.js", completed: true },
    { id: 2, title: "Build an API", completed: false },
    { id: 3, title: "Deploy to production", completed: false },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Toggle todo completion with optimistic update
  const toggleTodo = async (id: number) => {
    // Find the todo to update
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (!todoToUpdate) return;

    // Create a copy of the current todos
    const previousTodos = [...todos];

    // Optimistically update the UI
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, this would be an API call:
      // await fetch(`/api/v1/todos/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ completed: !todoToUpdate.completed }),
      // });

      // API call succeeded, no need to do anything as UI is already updated
      setError(null);
    } catch (error) {
      // If the API call fails, revert to the previous state
      setTodos(previousTodos);
      setError("Failed to update todo. Please try again.");
    }
  };

  // Add a new todo with optimistic update
  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodoTitle.trim()) return;

    setIsSubmitting(true);
    setError(null);

    // Create a new todo with a temporary ID
    const newTodo: Todo = {
      id: Date.now(), // Temporary ID
      title: newTodoTitle,
      completed: false,
    };

    // Optimistically add the new todo to the UI
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, this would be an API call:
      // const response = await fetch('/api/v1/todos', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title: newTodoTitle }),
      // });
      // const data = await response.json();

      // API call succeeded, no need to do anything as UI is already updated
      // In a real app, you might want to update the temporary ID with the real one:
      // setTodos(todos.map(todo => todo.id === newTodo.id ? { ...todo, id: data.id } : todo));
    } catch (error) {
      // If the API call fails, remove the optimistically added todo
      setTodos(todos.filter((todo) => todo.id !== newTodo.id));
      setError("Failed to add todo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete a todo with optimistic update
  const deleteTodo = async (id: number) => {
    // Create a copy of the current todos
    const previousTodos = [...todos];

    // Optimistically remove the todo from the UI
    setTodos(todos.filter((todo) => todo.id !== id));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, this would be an API call:
      // await fetch(`/api/v1/todos/${id}`, {
      //   method: 'DELETE',
      // });

      // API call succeeded, no need to do anything as UI is already updated
      setError(null);
    } catch (error) {
      // If the API call fails, revert to the previous state
      setTodos(previousTodos);
      setError("Failed to delete todo. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Todo List (with Optimistic Updates)</h2>

      <form onSubmit={addTodo} className="mb-4 flex">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 p-2 border rounded-l"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !newTodoTitle.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </form>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-3 border rounded">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
                {todo.title}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No todos yet. Add one above!</p>
      )}
    </div>
  );
}
