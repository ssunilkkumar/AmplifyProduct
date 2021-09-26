import React from 'react'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';


export const CartList = ({detail, count, total, img}) => {
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
                        <button>REMOVE</button>
                        <div>|</div>
                        <button>MOVE TO WISHLIST</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="photo" />
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
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
