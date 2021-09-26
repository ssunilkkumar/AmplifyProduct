import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Cart } from './Cart'
import { Home } from './Home'
import { Navbar } from './Navbar'
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"

Amplify.configure(awsconfig)

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
