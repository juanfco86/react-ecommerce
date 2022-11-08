import './CountApp.css'


const CountApp = ({ count = 1, setCount, stock }) => {

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
                    <b>Amount:</b> { count }
                </div>

                <div>
                    <button onClick={ increaseValue } className="button-6 btn-buy">+</button>
                    <button onClick={ decreaseValue } className="button-6 btn-buy">-</button>
                    <button onClick={ resetValue } className="button-6 btn-buy">R</button>
                </div>
            </div>
        </>
    )
}

export default CountApp