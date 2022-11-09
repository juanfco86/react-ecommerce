import React, { useState } from 'react'
import { useEffect } from 'react';
import { MainContext } from './MainContext'

const MainProvider = ({ children }) => {

    
    let saveCartBuy = [];
    
    if (localStorage.getItem('Result')) {
        saveCartBuy = JSON.parse(localStorage.getItem('Result'));
    }
    
    const [helper, setHelper] = useState(false);
    const [buy, setBuy] = useState(saveCartBuy);
    const [count, setCount] = useState(1);
    
    
    const url = "http://localhost:3000/data";

    
    
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
        
        //console.log(products)


    return (
        <MainContext.Provider value={{ buy, setBuy, count, setCount, products, setProducts }}>
            { children }
        </MainContext.Provider>
    )
}

export default MainProvider