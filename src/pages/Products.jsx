import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import * as photos from '../assets/img'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

const Products = () => {

    const { buy } = useContext(MainContext);

    return (
        <>
            {
                buy?.map((card, index) => {
                    return (
                        <>
                            <div key={index} className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='col-3 mb-3'>
                                    <h5>{card.name}</h5>
                                    <p><b>Price:</b> {card.price} €</p>
                                </div>
                                <div className='col-4 mb-3'>
                                    <img src={photos[`photo${card.img}`]} alt={card.name} />
                                </div>
                            </div>
                        </>
                    )
                }) 
            }
        </>
    )
}

export default Products