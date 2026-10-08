import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;

    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
    setDraft("");
  }

  function handleRemove(idToRemove) {
    const remaining = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(remaining);
  }

  function handleToggle(idToToggle) {
    const updated = todos.map((todo) =>
      todo.id === idToToggle ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(updated);
  }

  return (
    <main className="app">
      <h1 className="app-title">Todo App</h1>
      <p className="todo-count">Antal saker att göra: {todos.length}</p>

      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          value={draft}
          onChange={handleChange}
          placeholder="Skriv uppgift..."
        />
        <button type="button" className="btn btn-clear" onClick={handleClear}>
          Rensa
        </button>
        <button type="button" className="btn btn-add" onClick={handleAdd}>
          Lägg till
        </button>
      </div>

      {todos.length === 0 && (
        <p className="empty-message">Inga uppgifter än. Lägg till en!</p>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.done ? "todo-item done" : "todo-item"}
          >
            <span className="todo-text">{todo.text}</span>{" "}
            <button
              type="button"
              className="btn btn-toggle"
              onClick={() => handleToggle(todo.id)}
            >
              {todo.done ? "Ångra" : "Klar"}
            </button>{" "}
            <button
              type="button"
              className="btn btn-remove"
              onClick={() => handleRemove(todo.id)}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
