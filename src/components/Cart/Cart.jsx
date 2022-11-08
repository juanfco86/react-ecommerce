
const Cart = ( props ) => {
    
    const { id, name, price } = props;



    return (
        <>
            <div className="cart_contain" id={ id }> 
                <p className="priceCart">
                    <span className='firstLine'><b>Quantity: </b></span>
                    <span className='secondLine'><b>{ name }</b></span>
                    <span className='onlyPrice'><b>Price:</b> { price } €</span>
                </p>
            </div>
        </>
    )
}

export default Cart