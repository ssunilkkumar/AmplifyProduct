import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"
import {getCart} from "./../graphql/queries"
import {deleteCart} from "./../graphql/mutations"
import styles from "./Cart.module.css"

Amplify.configure(awsconfig)
export const Cart = () => {
    const [detail, setDetails] = useState(false);
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(0)
    const [img, setImg] = useState("");
    const {id} = useParams();

    const search = async (id) => {
        try{
            const cartData = await API.graphql(graphqlOperation(getCart,{id: id}))
            const cartList = cartData.data.getCart.productItem
            if(cartList === undefined) {
                setDetails(false)
            }
            else {
                setDetails(cartList)
                setImg(cartList.image.imgone)
                setTotal(Number(cartList.price)*.5)
            }
            
        } catch(error) {
            console.log(`error on fetching cart: `, error)
        }
    }

    function handleTotal(count) {
        let temp = count*((Number(detail.price)*.5))
        setTotal(temp)
    }
    const handleDelete = async () => {
        try{
            console.log(id)
            const cartData = await API.graphql(graphqlOperation(deleteCart,{input: {id: id}}))
            const cartList = cartData.data
            console.log("line 43", cartList)
            setDetails(false) 
        } catch(error) {
            console.log(`error on deleting cart: `, error)
        }
    }

    useEffect(() => {
        if(id) {
            search(id)
        }
        handleTotal(count)
    }, [id, count, detail])

    if(detail === false) {
        return (
            <section>
                <h1>No Item In Cart</h1>
            </section>
        )
    }

    return (
        <section className={styles.display}>
           <div>
               { img && (
                   <img src={img} alt="pic"/>
               )}
           </div>
           <div >
               <main className={styles.head}>{detail.name}</main>
               <span>{detail.description}</span>
               <hr/>
               <div>Quantity</div>
               <div className={styles.quantity}>
                   <button onClick={()=> setCount(count+1)}>+</button>
                   <div>{count}</div>
                   <button onClick={()=> setCount(count-1)} disabled={count === 1}>-</button>
               </div>
               <div className={styles.totalPrice}>
                    <main>TOTAL:</main>
                    <div>{total}</div>
               </div>
               <div className={styles.button}>
                   <button>Proceed</button>
                   <button onClick={handleDelete}>Delete</button>
               </div>

           </div>
        </section>
    )
}
