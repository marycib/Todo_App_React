import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function CreateTodoButton() {
    const {setOpenModal} =
    useContext(TodoContext);
    return (
        <button className='CreateTodoButton'
        onClick={
            () => {
                setOpenModal(state => !state);
            }
            

        } >x</button>
    );
}

export {CreateTodoButton};