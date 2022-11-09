import './ShoppingCart.css'
import Cart from '../Cart/Cart'
import TotalPrice from '../TotalPrice/TotalPrice'

//CART CONTAINER

const ShoppingCart = ( { buy, count, setCount, result, setResult } ) => {

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
                            img={card.img}
                            stock={card.stock}
                            buy={buy}
                            count={count}
                            setCount={setCount}
                        />
                    )
                })}
                <hr />
                    <TotalPrice 
                        buy={buy}
                        count={count} 
                    />
            </aside>
        </>
    )
}

export default ShoppingCart