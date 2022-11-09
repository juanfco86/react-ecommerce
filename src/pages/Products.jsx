import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import * as photos from '../assets/img'

const Products = () => {

    const { buy } = useContext(MainContext);

    const imgProduct = photos[`photo${buy.map((e) => e.img)}`];
    console.log(imgProduct)

    return (
        <>
            {
                buy && buy.map((card) => {
                    return (
                        <>
                        
                            <p>{card.name}</p>
                            <p>{card.price}</p>
                            <img src={imgProduct} alt={card.name} />
                        </>
                    )
                }) 
            }
        </>
    )
}

export default Products