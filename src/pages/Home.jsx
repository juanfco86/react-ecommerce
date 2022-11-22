import { useContext, useEffect } from 'react'
import PhotoContainer from '../components/PhotoContainer/PhotoContainer'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import { MainContext } from '../context/MainContext'

const Home = () => {
        
    const { buy, setBuy, products, helper, result, setResult, wishes, addWish, deleteWish, saveValue } = useContext(MainContext);
    
    // Ejecutar una funcion cada vez que cambie la variable wishes
    useEffect(() => {
        localStorage.setItem('Wish', JSON.stringify(wishes));
    }, [wishes])
    

    useEffect(() => {
        saveLocal(buy);
    }, [buy])
        
    const saveLocal = (buy) => {
        localStorage.setItem("Result", JSON.stringify(buy));
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