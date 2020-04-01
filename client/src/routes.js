import React from 'react'
import { MainPage } from './pages/Main.page'
import { Redirect, Route, Switch} from 'react-router-dom'
import { DetailPage } from './pages/Detaile.page'

export const useRoutes = () =>{
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Redirect to="/"></Redirect>
        </Switch>
    )
}