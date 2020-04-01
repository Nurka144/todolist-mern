import React, { useState } from 'react'

export const AddTodo = () => {
    const [todo, setTodo] = useState({ todo : '' })

    const changeHandler = (e) => {
        setTodo({todo, [e.target.name]: e.target.value})
    }

    const addPost = async (e) => {
        await fetch('/add', {
            method: 'post',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
    }

    return (
            <div className="input-field col s12">
                <input id="todoItem" 
                    type="text" 
                    name="todo" 
                    className="validate" 
                    onChange={changeHandler} />
                <label htmlFor="todoItem">Todo</label>
            <button 
            className="waves-effect waves-light btn"
            style={{width: '100%'}}
            onClick={addPost}>Add</button>
            </div>
    )
}