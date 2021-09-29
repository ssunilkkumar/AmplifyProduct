import React, {useState, useEffect, useContext} from 'react'
import styles from "./Detail.module.css"
import StarIcon from '@mui/icons-material/Star';
import { Size } from './Size';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Rating } from './Rating';
import { AppContext } from '../Context/AppContextProvider'


export const Detail = ({data, handleCart}) => {
    const [rating, setRating] = useState("")
    const [DisPrice, setDisPrice] = useState(0)
    const [size, setSize] = useState([])
    const [detail, setDetail] = useState([])
    const [fit, setFit] = useState([])
    const [material, setMaterial] = useState([])
    const {handleAddCart} = useContext(AppContext)


    function calculate(data) {
        let rate = Object.entries(data.rating).filter(ele => (ele[0] !== "id" && ele[0] !== "createdAt" && ele[0] !== "updatedAt"))
        let total = 0
        let score = 0
        let i=1
        rate.forEach(el => {
            total+=Number(el[1])
            score+= Number(el[1])*i
            i++
        })
        setRating([(score/total).toFixed(1), total])

        let price = Number(data.price)*(Number(data.discount)/100)    
        let dis = Number(data.price)-price
        setDisPrice(dis)    

        let sizing = Object.entries(data.size).filter(ele => (ele[0] !== "id" && ele[0] !== "createdAt" && ele[0] !== "updatedAt"))
        setSize(sizing)
        let details = Object.entries(data.detail).filter(ele => (ele[0] !== "id" && ele[0] !== "createdAt" && ele[0] !== "updatedAt"))
        setDetail(details)
        let fitting = Object.entries(data.fit).filter(ele => (ele[0] !== "id" && ele[0] !== "createdAt" && ele[0] !== "updatedAt"))
        setFit(fitting)
        let materials = Object.entries(data.material).filter(ele => (ele[0] !== "id" && ele[0] !== "createdAt" && ele[0] !== "updatedAt"))
        setMaterial(materials)
    }


    useEffect(() => {
        calculate(data)
    }, [data])

    return (
        <div className={styles.container}>
            <main>{data.name}</main>
            <div className={styles.description}>{data.description}</div>
            <div className={styles.rating}>
                <div>{rating[0]}</div>
                <StarIcon style={{color: "rgb(114,191,188)"}}/>
                <div>|</div>
                <div>{rating[1]} Ratings</div>
            </div>
            <hr/>
            <div className={styles.price}>
                <main>Rs. {DisPrice}</main>
                <div>Rs.{data.price}</div>
                <span>( {data.discount}% OFF )</span>
            </div>
            <div className={styles.taxes}>inclusive of all taxes</div>
            <div className={styles.sizetitle}>
                <main>SELECT SIZE</main>
                <div>SIZE CHART</div>
            </div>
            <div className={styles.size}>
                {
                    size?.map(item => (
                        <Size key={item[0]} item={item}/>
                    ))
                }
            </div>
            <div className={styles.button}>
                <button onClick={() => handleAddCart(data.id)}>
                    <ShoppingBagOutlinedIcon />
                    <div> ADD TO BAG</div>
                </button>
                <button>
                    <FavoriteBorderIcon />
                    <div> WHISHLIST</div>
                </button>
            </div>
            <div className={styles.flex}>
                <div>DELIVERY OPTIONS</div>
                <LocalShippingOutlinedIcon />
            </div>
            <div className={styles.pincode}>
                <input type="text" placeholder="Enter a PIN code" />
                <div>CHECK</div>
            </div>
            <div className={styles.smallFont}>Please enter PIN code to check delivery time & Pay on Delivery Availability</div>
            <div className={styles.conditions}>
                <div>100% Original Products</div>
                <div>Pay on delivery might be available</div>
                <div>Easy 30 days returns and exchanges</div>
                <div>Try & Buy might be available</div>
            </div>
            <div className={styles.flex}>
                <div>BEST OFFERS</div>
                <LocalOfferOutlinedIcon />
            </div>
            <div className={styles.conditions}>
                <div>EMI option availble</div>
                <li>EMI starting from Rs. 26/month</li>
                <span>View Plan</span>
            </div>
            
            <hr/>
            <div className={styles.flex}>
                <div>PRODUCT DETAILS</div>
                <AssignmentOutlinedIcon />
            </div>
            <div className={styles.conditions}>
                {
                    detail?.map(item => (
                        <div key={item[0]} >{item[1]}</div>
                    ))
                }
            </div>
            <div className={styles.flex}>Size & Fit</div>
            <div className={styles.conditions}>
                {
                    fit?.map(item => (
                        <div key={item[0]}>{item[1]}</div>
                    ))
                }
            </div>
            <section className={styles.flex}>Material & Care</section>  
            <div className={styles.material}>
                {
                    material?.map(item => (
                        <div key={item[0]}>
                            <main>{item[0]}</main>
                            <div>{item[1]}</div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.flex}>
                <div>Rating</div>
                <Rating data={data.rating}/>
            </div>
        </div>
    )
}
