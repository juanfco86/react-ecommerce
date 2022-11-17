import React, { useContext, useEffect } from 'react'
import { useReducer } from 'react'
import toast from 'react-hot-toast'
import PhotoContainer from '../components/PhotoContainer/PhotoContainer'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import { MainContext } from '../context/MainContext'
import { WishReducer } from '../helper/Reducer/WishReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('Wish')) || [];
}

const Home = () => {
    
    const initialState = [];
    const [ wishes, dispatch ] = useReducer(WishReducer, initialState, init);
    
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
    
    // Ejecutar una funcion cada vez que cambie la variable wishes
    useEffect(() => {
        localStorage.setItem('Wish', JSON.stringify(wishes));
    }, [wishes])
    
    const { buy, setBuy, products, helper, result, setResult } = useContext(MainContext);

    useEffect(() => {
        saveLocal(buy);
    }, [buy])
        
    const saveLocal = (buy) => {
        localStorage.setItem("Result", JSON.stringify(buy));
    }
    
    const saveValue = (product) => {
        const elem = JSON.parse(localStorage.getItem('Result'));
        const findProduct = elem.find((card) => card.id === product.id);
        if (findProduct) {
            setBuy(
                elem.map(e => e.id === product.id ? {
                    ...findProduct,
                    amount: findProduct.amount + 1
                } : e)
                )
            } else {
                toast.success('Added to the cart successfully! 💖')
                setBuy([...elem, { ...product, amount: 1 }]);
            }
        }
            
    const decreaseValue = (product) => {
        const elem = JSON.parse(localStorage.getItem('Result'));
        const findProduct = elem.find((card) => card.id === product.id);
        if (findProduct && findProduct.amount > 1) {
            setBuy(
                elem.map(e => e.id === product.id ? {
                    ...findProduct,
                    amount: findProduct.amount - 1
                } : e)
                )
            } else {
                setBuy([...elem, { ...product, amount: 1 }]);
            }
    }
                
    const resetValue = (product) => {
        const elem = JSON.parse(localStorage.getItem('Result'));
        const findProduct = elem.find((card) => card.id === product.id);
        if (findProduct) {
            setBuy(
                elem.map(e => e.id === product.id ? {
                    ...findProduct,
                    amount: 1
                } : e)
            )
        } 
    }
        
    return (
        <div className='container-body'>
            <ShoppingCart buy={ buy } setBuy={ setBuy } result={ result } setResult={ setResult } saveValue={ saveValue } decreaseValue={ decreaseValue } resetValue={ resetValue } />
            <PhotoContainer addWish= { addWish } deleteWish= { deleteWish } saveValue= { saveValue } products = { products } helper = { helper } />
        </div>
    )
}

export default Home