import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'

export const CardTodo = ({ title, text, id }) => {

    const history = useHistory()

    const deleteTodo = async () => {
    
        await fetch(`/delete/${id}`,{method: 'post'})
        .then(() => <Redirect to="/"></Redirect>)
    }

    return(
        <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
    <span className="card-title">{title}</span>
    <p>{ text ? text : ''}</p>
            </div>
            <div className="card-action">
              <button onClick={deleteTodo}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
}