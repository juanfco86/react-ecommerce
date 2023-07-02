import { useEffect, useReducer } from 'react';
import { useState } from 'react'
import { MainContext } from './MainContext'
import { WishReducer } from '../../helper/Reducer/WishReducer'
import toast from 'react-hot-toast';

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
    const [products, setProducts] = useState([]);
    
    const url = "http://localhost:4000/data";

    // COGE LA INFORMACION DEL SERVIDOR
    const fetchData = async () => {
        try {
            if (helper === false) {
                const response = await fetch(url);
                const data = await response.json();
                setHelper(true);
                setProducts(data)
            }
        } catch {
            console.log("Error");
            setHelper(false);
        }
    }

    useEffect(() => {
        fetchData();
    })

    
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
            toast.success('Add product to cart succefully 💖')
            setBuy(
                elem.map(e => e.id === product.id ? {
                    ...findProduct,
                    amount: findProduct.amount + 1
                } : e))
            } else {
                toast.success('Add product to cart succefully 💖')
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