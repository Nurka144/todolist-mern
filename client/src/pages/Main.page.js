import React, { useState, useCallback, useEffect } from 'react'
import { TodoItem } from '../components/TodoItem'
import { AddTodo } from './AddTodo'

export const MainPage = () => {

    const [todos, setTodos] = useState(null)

    const getTodo = useCallback( async () => {
        try {
            await fetch('/api/todos')
                .then((res) => res.json())
                .then(todo => setTodos(todo))
        } catch (e) {
            console.log(e)
        }
    })

    useEffect(() => {
        getTodo()
    }, [todos])

    return (
        <div>
            <h3>Main Page</h3>
            <div className="row">
                <AddTodo></AddTodo>
            </div>
            <div className="row">
                <TodoItem todos={todos}></TodoItem>
            </div>
        </div>
    )
}