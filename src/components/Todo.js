import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { AiOutlineCheckSquare } from 'react-icons/ai';

function Todo({todos, completeTodos, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });
    
    const submitUpate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpate} />;
    }

    return todos.map((todo, index) => (
        <div 
            className={
                todo.isComplete ? 'todo-row complete' : 'todo-row'
                } 
                key={index}
            >
            <div key={todo.id} onClick={() => completeTodos(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                
                <TiEdit 
                    onClick={() => setEdit({ id: todo.id, value: todo.text })} 
                    className='edit-icon icon'
                    title='edit'
                />
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)} 
                    className='delete-icon icon'
                    title='delete'
                />
                
                <AiOutlineCheckSquare 
                    onClick={() => setEdit({ id: todo.id, value: todo.text })} 
                    className='complete-icon icon'
                    title='mark complete'
                />
            </div>

        </div>
    ))
}

export default Todo
