import React from 'react'
import CountApp from '../CountApp/CountApp'
import './ShoppingCart.css'

const ShoppingCart = () => {



    return (
        <>
            <aside className="shopping_cart">
                <h4 className="title_box">Shopping Cart</h4>
                <hr />
                <div className="cart_details">
                    <div className="items"></div>
                    <p className="price">Items</p>
                    <hr />
                    <p className="totalPrice"><b>TOTAL</b> <span className='onlyPrice'>10 €</span></p>
                    <hr />
                </div>
            </aside>
        </>
    )
}

export default ShoppingCart