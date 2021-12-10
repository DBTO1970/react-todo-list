import React, { useState, useEffect, useRef } from 'react';

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            
        });

        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit} >
        {props.edit ? (
            <React.Fragment>
                <input 
                    type="text" 
                    placeholder='Update Item' 
                    value={input}
                    name='text'
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button edit'>Update</button>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <input 
                    type="text" 
                    placeholder='Add To-Do' 
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button'>Add To-Do</button>
            </React.Fragment>
        )
        }
           
        </form>);
};

export default ToDoForm;




