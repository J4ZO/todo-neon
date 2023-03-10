import React from 'react';

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {

    // Creamos el estado inicial para nuestros errores y carga
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        // Simulamos un segundo de delay de carga 
        setTimeout(() => {
            // Manejamos la tarea dentro de un try/catch por si ocurre algún error
            try {
                // Guardamos nuestro item en una constante
                const localStorageItem = localStorage.getItem(itemName);

                // const localStorageCheck = localStorage.getItem(checkbox);

                let parsedItem;

                // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
                if (!localStorageItem) {
                    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    // localStorage.setItem(checkbox, valueCheckbox);
                    parsedItem = initialValue;
                } else {
                    // Si existen TODOs en el localStorage los regresamos como nuestros todos
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
            } catch (error) {
                // En caso de un error lo guardamos en el estado
                setError(error);
            } finally {
                // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
                setLoading(false);
            }
        }, 1000);
    });

    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    // Regresamos los datos que necesitamos
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export default useLocalStorage;