import React, {useState, useEffect, useContext} from 'react'
import {useParams} from "react-router-dom";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"
import {getCart} from "./../graphql/queries"
import {deleteCart} from "./../graphql/mutations"
import styles from "./Cart.module.css"
import { AppContext } from '../Context/AppContextProvider'
import {Link} from "react-router-dom"
import { CartList } from '../Component/CartList';


Amplify.configure(awsconfig)
export const Cart = () => {
    const {handleCartitem} = useContext(AppContext)
    const [detail, setDetails] = useState(false);
    const [img, setImg] = useState("");
    const {id} = useParams();

    const search = async (id) => {
        try{
            const cartData = await API.graphql(graphqlOperation(getCart,{id: id}))
            const cartList = cartData.data.getCart
            if(cartList === undefined) {
                setDetails(false)
            }
            else {
                if(JSON.stringify(cartList)!==JSON.stringify(detail)) {
                    setDetails(cartList)
                    setImg(cartList.productItem.image.imgone)
                }  
            }
            
        } catch(error) {
            console.log(`error on fetching cart: `, error)
        }
    }

    const handleDelete = async () => {
        try{
            console.log(id)
            const cartData = await API.graphql(graphqlOperation(deleteCart,{input: {id: id}}))
            const cartList = cartData.data
            setDetails(false) 
            handleCartitem()
        } catch(error) {
            console.log(`error on deleting cart: `, error)
        }
    }

    useEffect(() => {
        if(id) {
            search(id)
        }
    }, [id, detail])


    return (
        <div>
            <div className={styles.head}>
                <Link to="/" className={styles.logo}>
                    <img src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon-715x715.png" alt="logo"/>
                </Link>
                <div className={styles.breadcrumbs}>
                    <main>BAG</main>
                    <div>----------</div>
                    <div>ADDRESS</div>
                    <div>----------</div>
                    <div>PAYMENT</div>
                </div>
                <div className={styles.secure}>
                    <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="secure" />
                    <div>100%  SECURE</div>
                </div>
            </div>
            {detail === true  && (
                <div className={styles.emptyCart}>
                    <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="bagphoto" />
                    <main>Hey, it feels so light</main>
                    <div>There is nothing in your bag add Some items</div>
                    <Link to="/">
                        <button>ADD ITEMS FROM WISHLIST</button>
                    </Link>
                </div>
            )}
            { detail && (
                <CartList detail={detail} img={img} handleDelete={handleDelete}/>
             )}
        </div>
    )
}
