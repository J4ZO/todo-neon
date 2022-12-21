import React from 'react';

function CheckLocal(isChecked, setIsChecked) {

    const [check, setChecked] = React.useState(false);

    React.useEffect(() => {
        // Simulamos un segundo de delay de carga 
        setTimeout(() => {
            // Manejamos la tarea dentro de un try/catch por si ocurre algún error
            try {
                // Guardamos nuestro item en una constante
                const localStorageCheck = localStorage.getItem(isChecked);

                // const localStorageCheck = localStorage.getItem(checkbox);

                let parsedCheck;

                // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
                if (!localStorageCheck) {
                    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
                    localStorage.setItem(isChecked, JSON.stringify(setIsChecked));
                    // localStorage.setItem(checkbox, valueCheckbox);
                    parsedCheck = setIsChecked;
                } else {
                    // Si existen TODOs en el localStorage los regresamos como nuestros todos
                    parsedCheck = JSON.parse(localStorageCheck);
                }

                setChecked(parsedCheck);
            } catch (error) {
                // En caso de un error lo guardamos en el estado
                console.log(error);
            }
        }, 1000);
    });

    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    const saveCheck = (newCheck) => {
        const stringifiedCheck = JSON.stringify(newCheck);
        localStorage.setItem(isChecked, stringifiedCheck);
        setChecked(newCheck);
    };

    // Regresamos los datos que necesitamos
    return {
        check,
        saveCheck
    };

}


export default CheckLocal;