import './TotalPrice.css'

const TotalPrice = ({ buy }) => {

  return (
    <p className="totalPrice"><b>TOTAL</b> <span className='onlyPrice'>
        { buy && buy
            .map((elem) => elem.price)
           // .map((elem) => elem.price * count) --> cuando traiga el count es asi
            .reduce((prev, curr) => prev + curr, 0)
        } €
    </span></p>
  )
}

export default TotalPrice