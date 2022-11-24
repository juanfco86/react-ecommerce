import { useReducer } from 'react';
import { useState } from 'react'
import { MainContext } from './MainContext'
import { WishReducer } from '../../helper/Reducer/WishReducer'

const MainProvider = ({ children }) => {
    
    let saveCartBuy = [];
    
    if (localStorage.getItem('Result')) {
        saveCartBuy = JSON.parse(localStorage.getItem('Result'));
    }

    const init = () => {
        return JSON.parse(localStorage.getItem('Wish')) || [];
    }
    
    const [helper, setHelper] = useState(false);
    const [buy, setBuy] = useState(saveCartBuy);
    const [ wishes, dispatch ] = useReducer(WishReducer, [], init);
    
    const url = "http://localhost:3000/data";

    // COGE LA INFORMACION DEL SERVIDOR
    const fetchData = () => {
        try {
            setTimeout(async () => {
                if (helper === false) {
                    const response = await fetch(url);
                    const data = await response.json();
                    setHelper(true);
                    setProducts(data)
                }
            }, 50)
        } catch {
            console.log("Error");
            setHelper(false);
        }
    }

    const [products, setProducts] = useState(fetchData());
    
    const addWish = (product) => {
        const action = {
            type: 'save_wish',
            payload: product
        }
        dispatch(action);     
    }
    
    const deleteWish = (product) => {
        const action = {
            type: 'delete_wish',
            payload: product.id
        }
        dispatch(action);    
    }

    const saveValue = (product) => {
        // COGE LA INFORMACION DEL LS
        const elem = JSON.parse(localStorage.getItem('Result'));
        // BUSCA LOS PRODUCTOS QUE COINCIDAN EN SU ID
        const findProduct = elem.find((card) => card.id === product.id);
        if (findProduct) {
            // SI EXISTE EL PRODUCTO, COPIA EL CONTENIDO Y LE SUMA UNO
            setBuy(
                elem.map(e => e.id === product.id ? {
                    ...findProduct,
                    amount: findProduct.amount + 1
                } : e)
                )
            } else {
                // SI NO COPIA EL CONTENIDO Y INTRODUCE EL PRIMERO
                setBuy([...elem, { ...product, amount: 1 }]);
                
        }
    }
    
    return (
        <MainContext.Provider value={{ buy, setBuy, products, setProducts, wishes, dispatch, addWish, deleteWish, saveValue }}>
            { children }
        </MainContext.Provider>
    )
}

export default MainProvider