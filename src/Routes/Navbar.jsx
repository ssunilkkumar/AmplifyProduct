import React, {useState, useEffect} from 'react'
import styles from "./Navbar.module.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"
import {listCarts} from "./../graphql/queries"
import {Link} from "react-router-dom"

Amplify.configure(awsconfig)
export const Navbar = ({data}) => {
    const [cart, setCart] = useState(false)

    useEffect(() => {
        getCart()
    },[data])

    const getCart= async() => {
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

    useEffect(() => {
        getCart()
    }, [])
    
    return (
        <div className={styles.fixed}>
            <div className={styles.head}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon-715x715.png" alt="logo"/>
                </div>
                <div>MEN</div>
                <div>WOMEN</div>
                <div>KIDS</div>
                <div>HOMES & LIVNG</div>
                <div>BEAUTY</div>
            </div>
                <Box component="div" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} className={styles.search}>
                    <SearchIcon className={styles.searchIcon}/>
                    <input type="search" 
                    placeholder="Search"
                    />
                </Box>
            <Box component="span" sx={{display: {xs: "none", sm: "flex"}}} className={styles.titleContent}>
                <div>
                    <PersonOutlineIcon />
                    <div>Profile</div>
                </div>
                <div>
                    <FavoriteBorderIcon/>
                    <div>Wishlist</div>
                </div>
                <div onClick={getCart}>
                    { cart && ( 
                        <Link to={`/cart/${cart.id}`} style={{ textDecoration: 'none', color: "black" }}>
                            <Badge badgeContent={1} color="error">
                                <ShoppingBagOutlinedIcon />
                            </Badge>
                        </Link>)
                    }
                    { cart === false && ( 
                        <Link to={`/cart`} style={{ textDecoration: 'none', color: "black" }}>
                            <Badge>
                                <ShoppingBagOutlinedIcon />
                            </Badge>
                        </Link>
                    )}
                    <div>Bag</div>
                </div>
            </Box>
            </div>
        </div>    
    )
}
