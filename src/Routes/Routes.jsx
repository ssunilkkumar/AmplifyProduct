import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Cart } from './Cart'
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Routes = () => {
   

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>    
                </Route>
                <Route path="/cart" exact>
                    <Cart/>
                </Route>
                <Route path="/cart/:id">
                    <Cart/>
                </Route>
                <Route>
                    <h3>
                        error
                    </h3>
                </Route>
            </Switch>
        </div>
    )
}
