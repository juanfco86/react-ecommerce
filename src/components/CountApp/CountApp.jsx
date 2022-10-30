
import { useState } from 'react'
import './CountApp.css'


const CountApp = ({ value = 0 }) => {
    const [count, setCount] = useState(value);
    
    const increaseValue = () => {
        setCount((prevState) => prevState + 1);
    }
    
    const decreaseValue = () => {
        if (count > 0) {
            setCount((prevState) => prevState - 1);
        }
    }
    
    const resetValue = () => {
        setCount( value = 0 );
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