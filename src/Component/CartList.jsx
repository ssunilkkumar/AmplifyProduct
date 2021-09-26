import React, {useState} from 'react'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';


export const CartList = ({detail, img, handleDelete}) => {
    const [mrp, setMrp] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const original = Number(detail.productItem.price)*(Number(detail.productItem.discount)/100)

    console.log("cartList = ",detail.productItem, detail.id)
    return (
        <div>
            <div>
                <div>
                    <div>Check delivery time & services</div>
                    <button>ENTER PIN CODE</button>
                </div>
                <div>
                    <div>
                        <LocalOfferOutlinedIcon />
                        <div>Available Offers</div>
                    </div>
                    <div>10% Instant Discount with Standard Chartered Credit and Debit Card on a min spend of Rs. 3000 TCA</div>
                    <div>Show More</div>
                </div>
                <div>
                    <div>ITEMS</div>
                    <div>
                        <button onClick={() => handleDelete(detail.id)}>REMOVE</button>
                        <div>|</div>
                        <button>MOVE TO WISHLIST</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img} alt="photo" />
                    </div>
                    <div>
                        <main>{detail.productItem.name}</main>
                        <div>{detail.productItem.description}</div>
                        <div>{detail.productItem.seller}</div>
                        <div>
                            <div>
                                <div>Size:</div>
                                <div>{detail.size}</div>
                                <select></select>
                            </div>
                            <div>
                                <div>Qty:</div>
                                <div>1</div>
                                <select></select>
                            </div>
                            <div>
                                <div>{original}</div>
                                <div>Rs.{detail.productItem.price}</div>
                                <div>{`(${detail.productItem.discount}% OFF)`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <main>COUPONS</main>
                <div>
                    <LoyaltyOutlinedIcon />
                    <div>Apply Coupons</div>
                    <button>APPLY</button>
                </div>
                <div>Login to get upto Rs.300 OFF on the first order</div>
                <main>PRICE DETAILS (1 Item)</main>
                <div>
                    <div>Total MRP </div>
                    <div>Rs.{mrp}</div>
                </div>
                <div>
                    <div>Discount on MRP</div>
                    <div>-Rs.{totalDiscount}</div>
                </div>
                <div>
                    <div>Coupon Discount</div>
                    <span>Apply Coupon</span>
                </div>
                <div>
                    <div>
                        <div>Convenience Fee</div>
                        <div>Know More</div>
                    </div>
                    <div>Rs. 0</div>
                </div>
                <main>
                    <div>Total Amount</div>
                    <div>Rs.{total}</div>
                </main>
                <button>PLACE ORDER</button>
            </div>
        </div>
    )
}
