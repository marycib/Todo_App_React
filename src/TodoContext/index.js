import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,//Renombrando item a todos
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    /*Para almacenar el imput de los usuarios*/
    const [searcValue, setSearchValue] = React.useState('')/**string vacio para que usuario pueda escribir */
    const [openModal, setOpenModal] = React.useState('true')


    const completedTodos = todos.filter(todo =>
        !!todo.completed).length;
    const totalTodos = todos.length;

    // console.log('Los usuarios buscan' + searcValue);

    /**Preguntar si el todo incluye texto que tiene searcValue  */
    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searcValue.toLocaleLowerCase();

            return todoText.includes(searchText)
        }
    );

const addTodo = (text) => {
    const newTodos = [...todos];//copia de los todos
    newTodos.push({
        text,
        completed: false,
    });

    saveTodos(newTodos);
}



    const completeTodo = (text) => {
        const newTodos = [...todos];//copia de los todos
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;

        saveTodos(newTodos);
    };


    const deleteTodo = (text) => {
        const newTodos = [...todos];//copia de los todos
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{

            loading,
            error,
            completedTodos,
            totalTodos,
            searcValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,

        }}
        > {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };