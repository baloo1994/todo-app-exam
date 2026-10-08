import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "temp 1" },
    { id: 2, text: "temp 2" },
    { id: 3, text: "temp 3" },
  ]);
  
  return (
    <main>
      <h1>Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;