import React, { useCallback, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CardTodo } from './CardTodo'

export const DetailPage = () => {
    const linkId = useParams().id

    const [todos, setTodos] = useState(null)

    const getTodo = useCallback( async () => {
        try {
            await fetch(`/detail/${linkId}`)
                .then((res) => res.json())
                .then(todo => setTodos(todo))
        } catch (e) {
            console.log(e)
        }
    })

    useEffect(() => {
        getTodo()
    }, [todos])

    if(todos) {
        return (
            <CardTodo title={todos.title} text={todos.text} id={todos._id}></CardTodo>
        )
    } 

    return (
        <p>Not Found</p>
    )
}