import './ShoppingCart.css'
import Cart from '../Cart/Cart'
import TotalPrice from '../TotalPrice/TotalPrice'
import { Link } from 'react-router-dom'

//CART CONTAINER

const ShoppingCart = ( { buy, setBuy } ) => {

    return (
        <>
            <aside className="shopping_cart">
                <h4 className="title_box">Shopping Cart</h4>
                <hr />
                {buy && buy.length > 0 && buy.map((card, index) => {
                    return (
                        <Cart
                            key={index}
                            id={card.id}
                            name={card.name}
                            price={card.price}
                            img={card.img}
                            stock={card.stock}
                            amount={card.amount}
                            buy={buy}
                            setBuy={setBuy}
                        />
                    ) 
                }) || <h6 className='empty-cart'>Empty Cart</h6> }  

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