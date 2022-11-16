import * as photos from '../../assets/img'
import CountApp from '../CountApp/CountApp';
import './Cart.css'

const Cart = ( props ) => {
    
    const { name, price, img, stock, amount, buy, setBuy, id } = props;
    const imgProduct = photos[`photo${img}`];

    

        return (
            <>
                <div className="cart_contain">
                    <div className="priceCart">
                        <CountApp id={ id } buy={ buy } setBuy={ setBuy } stock={ stock } amount={amount} />
                        <span className='secondLine'><b>{ name }</b></span>
                        <img src={ imgProduct } className='imgProduct' />
                        <span className='onlyPrice'><b>Price:</b> { price } €</span>
                    </div>
                </div>
            </>
        )
}

export default Cart