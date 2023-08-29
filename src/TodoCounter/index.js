

import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,

    } = React.useContext(TodoContext);

    return (
        completedTodos === totalTodos 
        ? <h1 className='TodoCounter'>No tienes 
        <span style={{ color: 'red' }}> TODOS
        </span>  🥳</h1> 
        :<h1 className='TodoCounter'>
            Has completado <span style={{ color: 'blue' }}>
                {completedTodos}</span> de
            <span style={{ color: 'red' }}> {totalTodos}
            </span> TODOS
        </h1>
    );
}

export { TodoCounter };