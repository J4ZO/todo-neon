import React from 'react';
import '../styles/TodoItem.css';
// import checkLocal from '../todoContext/CheckLocal';

function TodoItem(props) {

    // checkLocal('CHECK_V1', false);
    // function changeCheck() {
    //     const checkbox = document.getElementById('check');
    //     const checkboxCheckeado = localStorage.getItem(checkbox.id);
    //     if (checkboxCheckeado.checked === 'on') localStorage.setItem(checkboxCheckeado, checkbox.value); else localStorage.removeItem(checkboxCheckeado);
    // }


    // checkbox.addEventListener('change', function () {
    //     window.localStorage.setItem(checkbox.id, checkbox.checked)
    // })

    return (
        <li className={`TodoItem show-${props.completed}`}>
            <label className='container'>
                {/* <input type="checkbox" id='check' className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} onChange={changeCheck} /> */}
                <div className={`${props.completed && 'TodoItem-check--complete'} checkmark`} onClick={props.onComplete}>
                    <p className='check'>✓</p>
                </div>
                {/* <div className='checkmark' onClick={props.onComplete}></div> */}
            </label>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p> {/* Va a obtener la propiedad text, que esta en App.js */}
            <span className='Icon-delete' onClick={props.onDelete}>X</span>
        </li>
    )
}

export default TodoItem;