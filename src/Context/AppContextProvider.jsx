import React, {createContext, useState} from 'react'
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"
import {listCarts} from "./../graphql/queries"
import {createCart} from "./../graphql/mutations"
import { v4 as uuid } from 'uuid';

Amplify.configure(awsconfig)

export const AppContext = createContext(); 

export const AppContextProvider = ({children}) => {
    const [cart, setCart] = useState(false)
    const [mySize, setMySize] = useState(false)

    const handleCartitem= async() => {
        try{
            const cartData = await API.graphql(graphqlOperation(listCarts))
            const cartList = cartData.data.listCarts.items[0]
            if(cartList === undefined) {
                setCart(false)
            }
            else {
                setCart(cartList)
            }
            
        } catch(error) {
            console.log(`error on fetching cart: `, error)
        }
    }

    const handleAddCart = async (value) => {
        try {
            let payload ={
                id: 111,
                size: mySize,
                productID: value
            }
            const cart = await API.graphql(graphqlOperation(createCart, {input: payload}))
            handleCartitem()
        } catch (error) {
            console.log("error on adding in cart", error)
        }
    }

    const handleSize = (value) => {
        setMySize(value)
    }

    
    const value = {
        cart,
        handleCartitem,
        handleAddCart,
        handleSize,
        mySize
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}