import React from 'react';
// También es importante importar nuestro contexto
import { TodoContext } from '../todoContext/TodoContext';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import { Modal } from '../modal';
import { TodoForm } from "../components/TodoForm";
import LoadingComponent from '../components/LoadingComponent';
import { LogoProfile } from '../components/LogoProfile';

function AppUI() {
    // Desesctructuramos los valores de nuestro contexto
    const {
        error,
        loading,
        searchTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <section className='section'>
                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {/* / Mostramos un mensaje en caso de que ocurra algún error */}
                    {error && <p style={{ color: 'white' }}>Desespérate, hubo un error...</p>}
                    {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
                    {loading && <LoadingComponent />}
                    {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
                    {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
                    {/* Se genera una funcion para cada uno de los elementos */}

                    {searchTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodos(todo.text)}
                            onDelete={() => deleteTodos(todo.text)}
                        />
                    ))}{/* Se debe poner una propiedad key, para que el navegador sepa que los elementos son unicos */}
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}

                <CreateTodoButton
                    setOpenModal={setOpenModal} />
                <LogoProfile />
            </section>
        </React.Fragment>


    );
}

export { AppUI };