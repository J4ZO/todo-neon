import React from 'react';
import '../styles/TodoList.css'

function TodoList(props) {
    return (
        <section className='TodoList'>
            <ul>
                {props.children} {/* Se va acceder al contenido en este caso es TodoItem */}
            </ul>
        </section >
    )
}
export default TodoList;