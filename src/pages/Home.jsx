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


    const { buy, setBuy, count, setCount, products, helper, result, setResult } = useContext(MainContext);

        useEffect(() => {
            saveLocal(buy);
        }, [buy])
        
        const saveLocal = (buy) => {
            localStorage.setItem("Result", JSON.stringify(buy));
        }

        
        const saveValue = (product) => {
            let elem = JSON.parse(localStorage.getItem('Result'));
            elem.push(product);
            setBuy(elem);
            toast.success('Added to the cart successfully! 💖')
        }
        

    return (
        <div className='container-body'>
            <ShoppingCart buy={ buy } setBuy={ setBuy } count={count} setCount={setCount} result={result} setResult={setResult} />
            <PhotoContainer addWish= { addWish } deleteWish= { deleteWish } saveValue= { saveValue } products = { products } helper = { helper } />
        </div>
    )
}

export default Home