import './CountApp.css'


const CountApp = ({ count, setCount, stock }) => {

    const increaseValue = () => {
        if(count < stock) {
            setCount((prevState) => prevState + 1);
        }
    }
    
    const decreaseValue = () => {
        if (count > 1) {
            setCount((prevState) => prevState - 1);
        }
    }
    
    const resetValue = () => {
        setCount(count = 1);
    }


    return (
        <>
            <div className='btn-indere'>
                <div>
                    <b>Quantity:</b> { count }
                </div>

                <div className='btn-options'>
                    <button onClick={ increaseValue } className="btn-buy btn-size">+</button>
                    <button onClick={ decreaseValue } className="btn-buy btn-size">-</button>
                    <button onClick={ resetValue } className="btn-buy btn-size">R</button>
                </div>
            </div>
        </>
    )
}

export default CountApp