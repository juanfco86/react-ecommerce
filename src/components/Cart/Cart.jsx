import * as photos from '../../assets/img'
import CountApp from '../CountApp/CountApp';
import './Cart.css'

const Cart = ( props ) => {
    
    const { id, name, price, img, count } = props;
    const imgProduct = photos[`photo${img}`];





        return (
            <>
                <div className="cart_contain" id={ id }> 
                    <div className="priceCart">
                        <CountApp count={ props.count } setCount={ props.setCount } stock={ props.stock } />
                        <span className='secondLine'><b>{ name }</b></span>
                        <img src={ imgProduct } className='imgProduct' />
                        <span className='onlyPrice'><b>Price:</b> { price * count } €</span>
                    </div>
                </div>
            </>
        )
}

export default Cart