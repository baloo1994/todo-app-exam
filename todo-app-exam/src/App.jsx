import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "temp 1" },
    { id: 2, text: "temp 2" },
    { id: 3, text: "temp 3" },
  ]);

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

  const newTodo = { id: Date.now(), text };
  setTodos([...todos, newTodo]);
  setDraft("");
}

function handleRemove(idToRemove) {
  const remaining = todos.filter((todo) => todo.id !== idToRemove);
  setTodos(remaining);
}
  
  return (
    <main>
      <h1>Todo App</h1>
      <p>Antal saker att göra: {todos.length}</p>
      <input
  type="text"
  value={draft}
  onChange={handleChange}
  placeholder="Skriv uppgift..."
/>
<button type="button" onClick={handleClear}>
  Rensa
</button>
<button type="button" onClick={handleAdd}>
  Lägg till
</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
  {todo.text}{" "}
  <button type="button" onClick={() => handleRemove(todo.id)}>
    Ta bort
  </button>
</li>
        ))}
      </ul>
    </main>
  );
}

export default App;