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
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;