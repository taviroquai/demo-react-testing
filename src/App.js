import React, { useState } from 'react';
import { getData } from './getData';

function App() {

  let [ todo, setTodo ] = useState(null);
  
  return (
    <div>
      <button onClick={e => getData((todo) => setTodo(todo))}>click me</button>
      <p>{ !!todo && todo.title }</p>
    </div>
  );
}

export default App;
