import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const{
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    const [newTodoValue, 
        setNewTodoValue] = React.useState('');//vicula textatea con estado local

    const onSubmit = (event) => {
        event.preventDefault();//para evitar que la pagina se recargue
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(event.target.value);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>

            <div className="flower flower1">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
            </div>
            <div className="flower flower2">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
            </div>
            <div className="flower flower3">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
            </div>
            <div className="flower flower4">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
            </div>
            <div className="flower flower5">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
            </div>
            <div className="flower flower6">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
            </div>


            <textarea
                placeholder="Comprar carne para el asado"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type='button' className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel} >Cancelar</button>

                <button type="submit" className="TodoForm-button TodoForm-button--add"
                >Añadir

                </button>

            </div>

        </form>
    )
}


export { TodoForm };