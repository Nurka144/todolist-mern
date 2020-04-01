import React from 'react'
import { TodoList } from './TodoList'

export const TodoItem = ({ todos }) => {
    return (
        <ul className="collection">
            {
                todos ? todos.map((todo, index) => <TodoList id={todo._id} title={todo.title} key={index}></TodoList>) : <p>No Todos</p>
            }
        </ul>
    )
}