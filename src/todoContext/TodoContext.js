import React from 'react';
import useLocalStorage from './useLocalStore';


// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext();



function TodoProvider(props) {

    // const [isChecked, setIsChecked] = useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);


    const [searchValue, setSearchValue] = React.useState(''); // Estado para el search

    const complete = todos.filter(todo => todo.completed).length; // Cantidad de todos completados
    const allTodos = todos.length; // Total todos

    let searchTodos = []; // Donde estaran los todos, para filtralos

    if (!searchValue >= 1) {
        searchTodos = todos;
    } else {
        searchTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase(); // Transforma el valor del todo en minusculas
            const searchText = searchValue.toLowerCase(); // Transforma el valor de la busqueda en minusculas
            return todoText.includes(searchText); // Verifica si lo que esta escribiendo esta en un todo
        })
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text); // Obtiene la posicion del todo con el mismo nombre
        const newTodos = [...todos] // Copia el array de todos
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Cambia el valor de completed si se selecciona o se deselecciona
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
    }

    // Función para añadir un nuevo TODO
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };


    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text); // Obtiene la posicion del todo con el mismo nombre
        const newTodos = [...todos] // Copia el arrat de todos
        newTodos.splice(todoIndex, 1); // Se elimina el todo segun su indice
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            allTodos,
            complete,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };