import './ShoppingCart.css'
import Cart from '../Cart/Cart'

//CART CONTAINER

const ShoppingCart = ( { buy } ) => {

    return (
        <>
            <aside className="shopping_cart">
                <h4 className="title_box">Shopping Cart</h4>
                <hr />
                {buy && buy.map((card, index) => {
                    return (
                        <Cart
                            key={index}
                            id={card.id}
                            name={card.name}
                            price={card.price}
                            buy={buy}
                        />
                    )
                })}
                <hr />
                    <p className="totalPrice"><b>TOTAL</b> <span className='onlyPrice'>
                        { buy && buy
                            .map((elem) => elem.price)
                            .reduce((prev, curr) => prev + curr, 0)
                        } €
                    </span></p>
            </aside>
        </>
    )
}

export default ShoppingCart