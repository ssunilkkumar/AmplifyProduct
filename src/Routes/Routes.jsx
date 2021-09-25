import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Cart } from './Cart'
import { Home } from './Home'
import { Navbar } from './Navbar'
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"
import {createCart} from "./../graphql/mutations"
import { v4 as uuid } from 'uuid';

Amplify.configure(awsconfig)

export const Routes = () => {
    const [cart, setCart] = useState(false)

    const handleCart = async (value) => {
        try {
            let payload ={
                id: uuid(),
                productID: value
            }
            const cart = await API.graphql(graphqlOperation(createCart, {input: payload}))
            setCart(cart.data.createCart)
        } catch (error) {
            console.log("error on adding in cart", error)
        }
    }

    return (
        <div>
            <Navbar data={cart.id}/>
            <Switch>
                <Route exact path="/">
                    <Home handleCart={handleCart}/>    
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
