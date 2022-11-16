import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import * as photos from '../assets/img'
import TotalPrice from '../components/TotalPrice/TotalPrice';

const Products = () => {
    const { buy } = useContext(MainContext);

    return (
        <>

        {/* EJEMPLO DE COMO PODRIA HACERLO
            <div>
                <Login />
            </div>
        FIN EJEMPLO */}

            {
                <div>

                <table>
                    <thead>
                        <tr>

                            <th></th>
                            <th className='th-titles td-styles'>Product</th>
                            <th className='th-titles td-styles'>Price</th>
                            <th className='th-titles td-styles'>Quantity</th>
                            <th className='th-titles td-styles'>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                    { 
                        buy?.map((card) => {
                            const productId = `product${card.id}`;
                            return (
                                <>
                                        <tr key={productId}>
                                            <td className='td-obj'><img src={photos[`photo${card.img}`]} alt={card.name} className='photo-price-cart' /></td>
                                            <td className='td-obj td-styles'>{card.name}</td>
                                            <td className='td-obj td-styles'>{card.price} €</td>
                                            <td className='td-obj td-styles'>{card.amount}</td>
                                            <td className='td-obj td-styles'>{card.price * card.amount} €</td>
                                        </tr>
                                </>
                            )
                        })
                    }

                    </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td className='th-footer'></td>
                    <td className='th-footer' colSpan="2">
                        <TotalPrice buy={ buy } />
                    </td>
                    <td className='th-footer'>
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <button className='mb-1 mt-1 button-6'>Pay</button>
                        </div>
                    </td>
                </tr>
            </tfoot>
            
            </table>
                    </div>

            

            }
        </>
    )
}

export default Products