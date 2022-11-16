import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import './CountApp.css'


const CountApp = ({ price, img, name, amount, stock, buy, setBuy, id, saveValue, resetValue, decreaseValue }) => {

    const product = {
        id: id,
        name: name,
        price: price,
        stock: stock,
        img: img,
        amount: amount,
    };

    // CREAR UN OBJETO PROVISIONAL PARA NO PERDER LA INFORMACION DEL ORIGINAL
    const [prov, setProv] = useState(buy);

    // QUE LO MUESTRE CADA VEZ QUE prov RECIBE CAMBIOS
    useEffect(() => {
        setBuy(prov);
    }, [prov])
    
    // BOTON DE INCREMENTAR VALOR (HOME)
    const increaseAmount = (product) => {
        saveValue(product);
    }
    
    // BOTON DE REDUCIR VALOR
    const decreaseAmount = (product) => {
        decreaseValue(product);
    }
    
    // BOTON DE RESETEAR VALOR
    const resetAmount = (product) => {
        resetValue(product);
    }
    
    // BOTON DE BORRAR
    const deleteProduct = (id) => {
        toast.error('Remove to the cart successfully 💔')
        return setProv(buy.filter((e, index) => {
            return buy[index].id !== id;
        }))
    }
    
    return (
        <>
            <div className='btn-indere'>
                <div className="row start-cart-line">
                    <div className='count-space mb-1 mt-1'>
                        <b className='col-3'>Qty.</b>
                        <span className='cart-amount-span col-3'>
                            { product.amount }
                        </span>
                        <button onClick={ () => deleteProduct(id) } className='col-3 btn-wish btn-delete'><i className='fa-solid fa-trash icon-trash'></i></button>
                    </div>
                </div>

                <div className='btn-options'>
                    <button onClick={ () => increaseAmount(product) } className="btn-buy btn-size">+</button>
                    <button onClick={ () => decreaseAmount(product) } className="btn-buy btn-size">-</button>
                    <button onClick={ () => resetAmount(product) } className="btn-buy btn-size">R</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CountApp