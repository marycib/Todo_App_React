
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';
import React from 'react';


//para filtrar lo Todos
function TodoSearch() {
const {
    searcValue,
    setSearchValue,
} = React.useContext(TodoContext);

    return (
        <>
            <input placeholder="Cortar cebolla"
                className="TodoSearch"
                value={searcValue}/**conectando el input al estado */
                onChange={(event) => {
                    setSearchValue(event.target.value); /**funcion actualizadora del estado */

                }

                } /></>
    );
}

export { TodoSearch };