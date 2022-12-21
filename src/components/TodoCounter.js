import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../todoContext/TodoContext';

function TodoCounter() {
    const { complete, allTodos } = React.useContext(TodoContext);

    return (
        <h2 className='TodoCounter'>Task list {complete} of {allTodos}</h2>
    )
}

export default TodoCounter;