import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Products from '../../pages/Products';
import './CountApp.css'


const CountApp = ({ count, setCount, stock, buy, setBuy, id, saveCartBuy }) => {

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

    // CREAR UN OBJETO PROVISIONAL PARA NO PERDER LA INFORMACION DEL ORIGINAL
    const [prov, setProv] = useState(buy);
    
    const deleteProduct = (id) => {
        return setProv(buy.filter((e, index) => {
            toast.error('Remove to the cart successfully 💔')
            return buy[index].id !== id;
        }))
    }

    setBuy(prov);
    
    
    return (
        <>
            <div className='btn-indere'>
                <div className="row">
                    <div className='count-space'>
                        <b>Quantity: { count }</b>
                        <button onClick={ () => deleteProduct(id) } className='btn btn-wish'><i className='fa-solid fa-trash icon-trash'></i></button>
                    </div>
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