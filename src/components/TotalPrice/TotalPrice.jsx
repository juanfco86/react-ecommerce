import './TotalPrice.css'

const TotalPrice = ({ buy, count }) => {

  return (
    <p className="totalPrice"><b>TOTAL</b> <span className='onlyPrice'>
        { buy && buy
            .map((elem) => elem.price * count)
            .reduce((prev, curr) => prev + curr, 0)
        } €
    </span></p>
  )
}

export default TotalPrice