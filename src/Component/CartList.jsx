import React, {useState} from 'react'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import styles from "./CartList.module.css"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { CartPop } from './CartPop';

export const CartList = ({detail, img, handleDelete}) => {
    const [mrp, setMrp] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [size, setSize] = useState(detail.size);
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [model, setModel] = useState(false)
    const original = Number(detail.productItem.price)*(Number(detail.productItem.discount)/100)

    console.log("cartList = ",detail.productItem, detail.id)

    const handleOpen = (value) => {
        setModel(value);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);


    return (
        <div className={styles.content}>
            <div className={styles.detail}>
                <div className={styles.pincheck}>
                    <div>Check delivery time & services</div>
                    <button>ENTER PIN CODE</button>
                </div>
                <div className={styles.offers}>
                    <main>
                        <LocalOfferOutlinedIcon />
                        <div>Available Offers</div>
                    </main>
                    <div>10% Instant Discount with Standard Chartered Credit and Debit Card on a min spend of Rs. 3000 TCA</div>
                    <div className={styles.fontPink}>Show More</div>
                </div>
                <div className={styles.items}>
                    <main>ITEMS SELECTED</main>
                    <div >
                        <button onClick={() => handleDelete(detail.id)}>REMOVE</button>
                        <div>|</div>
                        <button>MOVE TO WISHLIST</button>
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        <img src={img} alt="productphoto" />
                    </div>
                    <div className={styles.info}>
                        <main>{detail.productItem.name}</main>
                        <div>{detail.productItem.description}</div>
                        <div>{detail.productItem.seller}</div>
                        <div className={styles.size}>
                            <main>
                                <div>Size:</div>
                                <div>{size}</div>
                                <div onClick={() => handleOpen(true)}>
                                    <ArrowDropDownOutlinedIcon/>
                                </div>
                            </main>
                            <main>
                                <div>Qty:</div>
                                <div>{quantity}</div>
                                <div onClick={() => handleOpen(false)}>
                                    <ArrowDropDownOutlinedIcon/>
                                </div>
                            </main>
                            <div>
                                <CartPop 
                                    handleClose={handleClose} 
                                    open={open} 
                                    model={model} 
                                    handleSize={(value)=> setSize(value)}
                                    handleQuantity={(value => setQuantity(value))}
                                />
                            </div>
                        </div>
                        <div className={styles.price}>
                            <main>Rs.{original}</main>
                            <div>Rs.{detail.productItem.price}</div>
                            <div>{`(${detail.productItem.discount}% OFF)`}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.total}>
                <main>COUPONS</main>
                <div className={styles.apply}>
                    <span>
                        <LoyaltyOutlinedIcon />
                        <div>Apply Coupons</div>
                    </span>
                    <button>APPLY</button>
                </div>
                <div className={styles.flex}>
                    <div className={styles.fontPink}>Login </div>
                    <div>to get upto Rs.300 OFF on the first order</div>
                </div>
                <main>PRICE DETAILS (1 Item)</main>
                <section>
                    <div>Total MRP </div>
                    <span>Rs.{mrp}</span>
                </section>
                <section>
                    <div>Discount on MRP</div>
                    <span>- Rs.{totalDiscount}</span>
                </section>
                <section>
                    <div>Coupon Discount</div>
                    <span>Apply Coupon</span>
                </section>
                <section>
                    <div className={styles.flex}>
                        <div>Convenience Fee</div>
                        <span className={styles.fontPink}>Know More</span>
                    </div>
                    <span>Rs. 0</span>
                </section>
                <section>
                    <main>Total Amount</main>
                    <main>Rs.{total}</main>
                </section>
                <button>PLACE ORDER</button>
            </div>
        </div>
    )
}
