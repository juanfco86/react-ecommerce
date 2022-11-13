import * as photos from '../../assets/img'
import CountApp from '../CountApp/CountApp';
import './Cart.css'

const Cart = ( props ) => {
    
    const { name, price, img, count, setCount, stock, buy, setBuy, id } = props;
    const imgProduct = photos[`photo${img}`];

    

        return (
            <>
                <div className="cart_contain">
                    <div className="priceCart">
                        <CountApp id={ id } buy={ buy } setBuy={ setBuy } count={ count } setCount={ setCount } stock={ stock } />
                        <span className='secondLine'><b>{ name }</b></span>
                        <img src={ imgProduct } className='imgProduct' />
                        <span className='onlyPrice'><b>Price:</b> { price * count } €</span>
                    </div>
                </div>
            </>
        )
}

export default Cart