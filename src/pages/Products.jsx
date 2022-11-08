import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

const Products = () => {

    const { buy } = useContext(MainContext)

    return (
        <>
            {
                buy && buy.map((card) => {
                    return (
                        <>
                            <p>{card.name}</p>
                            <p>{card.price}</p>
                            <img src={card.img} alt={card.name} />
                        </>
                    )
                }) 
            }
        </>
    )
}

export default Products