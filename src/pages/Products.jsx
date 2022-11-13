import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import * as photos from '../assets/img'

const Products = () => {
    const { buy } = useContext(MainContext);

    return (
        <>
            {
                <table>
                    <thead>
                        <tr>

                            <th></th>
                            <th className='th-titles'>Product</th>
                            <th className='th-titles'>Price</th>
                            <th className='th-titles'>Quantity</th>
                            <th className='th-titles'>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                    { buy?.map((card) => {
                        const productId = `product${card.id}`;
                        return (
                            
                            <>
                                    <tr key={productId}>
                                        <td className='td-obj'><img src={photos[`photo${card.img}`]} alt={card.name} className='photo-price-cart' /></td>
                                        <td className='td-obj'>{card.name}</td>
                                        <td className='td-obj'>{card.price} €</td>
                                        <td className='td-obj'>Count</td>
                                        <td className='td-obj'>{card.price * 2} €</td>
                                    </tr>
                            </>
                        )
                    })}

                    </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <button className='mb-1 mt-1 btn button-6'>Buy</button>
                        </div>
                    </td>
                </tr>
            </tfoot>
            
            </table>

            }
        </>
    )
}

export default Products