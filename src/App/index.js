import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

//import { useLocalStorage } from './useLocalStorage'





// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Comprar carne', completed: false },
//   { text: 'Bailar salsa', completed: false },
  
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  // localStorage.removeItem('TODOS_V1');






function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
  }



export default App;
