import './TotalPrice.css'

const TotalPrice = ({ buy }) => {

    return (
        <p className="totalPrice">
            <b>Total:</b> 
            <span className='onlyPrice'>
                {
                  buy && buy
                      .map((elem) => elem.price * elem.amount)
                      .reduce((prev, curr) => prev + curr, 0)
                } €
            </span>
        </p>
    )
}

export default TotalPrice