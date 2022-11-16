import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import './CountApp.css'


const CountApp = ({ amount, stock, buy, setBuy, id }) => {

    const [count, setCount] = useState(1);

    // CREAR UN OBJETO PROVISIONAL PARA NO PERDER LA INFORMACION DEL ORIGINAL
    const [prov, setProv] = useState(buy);

    // QUE LO MUESTRE CADA VEZ QUE prov RECIBE CAMBIOS
    useEffect(() => {
        setBuy(prov);
    }, [prov])


    // BOTON DE BORRAR
    const deleteProduct = (id) => {
        toast.error('Remove to the cart successfully 💔')
        return setProv(buy.filter((e, index) => {
            return buy[index].id !== id;
        }))
    }
    
    // BOTON DE INCREMENTAR VALOR
    const increaseValue = () => {
        if(count < stock) {
            setCount((prevState) => prevState + 1);
        }
    }

    // BOTON DE REDUCIR VALOR
    const decreaseValue = () => {
        if (count > 1) {
            setCount((prevState) => prevState - 1);
        }
    }
    
    // BOTON DE RESETEAR VALOR
    const resetValue = () => {
        setCount((prevState) => prevState = 1);
    }

    
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