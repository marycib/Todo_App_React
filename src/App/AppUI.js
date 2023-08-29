
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmtyTodos } from '../EmtyTodos ';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <div className='WrapperTodo'>


                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {loading && (
                        <>

                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )}





                    {/* Consuminedo los estados  */}


                    {error && <TodosError />}
                    {(!loading && searchedTodos.length === 0) &&
                        <EmtyTodos />}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}

                </ TodoList>



            </div>
            <CreateTodoButton 
            setOpenModal={setOpenModal} />

            {/* Logica para abrir o cerrar el modal */}

            {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
            )}
            {/*</React.Fragment>*/}




        </>
    );
}


export { AppUI };