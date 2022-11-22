import './ShoppingCart.css'
import Cart from '../Cart/Cart'
import TotalPrice from '../TotalPrice/TotalPrice'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

//CART CONTAINER
const ShoppingCart = ( { buy, setBuy, saveValue, resetValue, decreaseValue } ) => {

    return (
        <>
            <aside className="shopping_cart">
                <h4 className="title_box">Shopping Cart</h4>
                <hr />
                {
                    buy && buy.length > 0 && buy.map((card, index) => {
                        return (
                            <Cart
                                key={uuidv4()}
                                id={card.id}
                                name={card.name}
                                price={card.price}
                                img={card.img}
                                stock={card.stock}
                                amount={card.amount}
                                buy={buy}
                                setBuy={setBuy}
                                saveValue={saveValue}
                                decreaseValue={decreaseValue}
                                resetValue={resetValue}
                            />
                        ) 
                    }) || <h6 className='empty-cart d-flex align-items-center justify-content-center'>Empty Cart</h6>
                }  
                <hr />
                <div className='mb-3'>
                    <TotalPrice 
                        buy={buy}
                    />
                </div>

                <div className='mb-3 d-flex flex-column justify-content-center align-items-center'>
                    <Link to="/products" className='nav'><button className="btn button-6" role="button">Checkout<i className="fa-solid fa-credit-card"></i></button></Link>
                </div>
            </aside>
        </>
    )
}

export default ShoppingCart