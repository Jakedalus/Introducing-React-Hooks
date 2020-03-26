import React, { useState } from 'react';
import './App.css';

function Todo({todo, index}) {
  return (
    <div class="todo">
      {todo.text}
    </div>
  );
}

function App() {

  const [todos, setTodos] = useState([{
    text: 'learn about react hooks',
    isCompleted: false
  }, {
    text: 'buy groceries',
    isCompleted: false
  }, {
    text: 'cook badassed chili',
    isCompleted: false
  }]);


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;