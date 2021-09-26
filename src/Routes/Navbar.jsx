import React, {useEffect, useContext} from 'react'
import styles from "./Navbar.module.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import { AppContext } from '../Context/AppContextProvider'

export const Navbar = () => {
    const {handleCartitem, cart} = useContext(AppContext)
    console.log("navbar =",cart)

    useEffect(() => {
        handleCartitem()
    },[])

    

    return (
        <div className={styles.fixed}>
            <div className={styles.head}>
            <div className={styles.menu}>
                <Link to="/" className={styles.logo}>
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon-715x715.png" alt="logo"/>
                </Link>
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
                <div>
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
