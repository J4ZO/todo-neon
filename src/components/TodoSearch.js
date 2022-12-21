import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../todoContext/TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        // console.log(event.target.value); // Obtiene el valor del input
        setSearchValue(event.target.value);
    }

    return (
        <div className="input-group">

            {/* <label className='TodoSearch' >
                <p>Task name</p>
                <input placeholder="Search Task..." value={searchValue} onChange={onSearchValueChange} className="inputSearch" />
            </label> */}


            <input required="" type="text" name="text" autoComplete="off" className="input" value={searchValue} onChange={onSearchValueChange} />
            <label className="user-label">Search Task</label>
        </div >

    )
}

export default TodoSearch;