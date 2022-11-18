import { useEffect } from 'react';
import { useState } from 'react'
import { MainContext } from './MainContext'

const MainProvider = ({ children }) => {
    
    let saveCartBuy = [];
    
    if (localStorage.getItem('Result')) {
        saveCartBuy = JSON.parse(localStorage.getItem('Result'));
    }
    
    const [usersData, setUsersData] = useState([]);
    const [helper, setHelper] = useState(false);
    const [helperRegister, setHelperRegister] = useState(false);
    const [buy, setBuy] = useState(saveCartBuy);
    
    const url = "http://localhost:3000/data";
    const urlUsers = "http://localhost:3000/users";
    
    // Pasar a CONTEXT los fetch --> setUsetData y setProduct
    const fetchDataUsers = () => {
        try {
            setTimeout(async () => {
                const response = await fetch(urlUsers);
                const dataUsers = await response.json();
                setUsersData(dataUsers);
            }, 50)
        } catch {
            console.log("Error");
        }
    }

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
    
    return (
        <MainContext.Provider value={{ buy, setBuy, products, setProducts, usersData, setUsersData, fetchDataUsers, helperRegister, setHelperRegister }}>
            { children }
        </MainContext.Provider>
    )
}

export default MainProvider