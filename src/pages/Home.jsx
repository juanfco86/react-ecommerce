import React, { useContext, useEffect } from 'react'
import PhotoContainer from '../components/PhotoContainer/PhotoContainer'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import { MainContext } from '../context/MainContext'

const Home = () => {

    const { buy, setBuy, products, setProducts, helper } = useContext(MainContext);

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
        }

    return (
        <div className='container-body'>
            <ShoppingCart buy={ buy } />
            <PhotoContainer saveValue= { saveValue } products = { products } helper = { helper }  />
        </div>
    )
}

export default Home