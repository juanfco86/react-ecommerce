import * as photos from '../../assets/img'
import CountApp from '../CountApp/CountApp';
import './Cart.css'

const Cart = ( props ) => {
    // SE RECOGE LA INFORMACION POR PROPS    
    const { name, price, img, stock, amount, buy, setBuy, id, saveValue, resetValue, decreaseValue } = props;
    const imgProduct = photos[`photo${img}`];

        return (
            <>
                <div className="cart_contain">
                    <div className="priceCart">
                        <CountApp price={ price } img={ img } saveValue={ saveValue } resetValue={ resetValue } decreaseValue={ decreaseValue } id={ id } buy={ buy } setBuy={ setBuy } stock={ stock } amount={ amount } />
                        <span className='secondLine'><b>{ name }</b></span>
                        <img src={ imgProduct } alt={ name } className='imgProduct' />
                        <hr />
                        <span className='onlyPrice'><b>Price:</b> <b>{ price } €</b></span>
                    </div>
                </div>
            </>
        )
}

export default Cart