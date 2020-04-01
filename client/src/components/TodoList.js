import React from 'react'
import { Link } from 'react-router-dom'

export const TodoList = ({ id,title, index }) => {
    return (
        <li className="collection-item">
            <Link to={`/detail/${id}`}>{ title }</Link>
        </li>
    )
}