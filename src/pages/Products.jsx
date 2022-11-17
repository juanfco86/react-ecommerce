import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import * as photos from '../assets/img'
import TotalPrice from '../components/TotalPrice/TotalPrice';
import Login from './Login';
import Register from './Register';
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
    const { buy } = useContext(MainContext);

    return (
        <>
            <div className='row'>
            {
                <div className='col-8'>
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
                                return (
                                    <>
                                            <tr key={uuidv4()}>
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
            <div className='col-4 div-double'>
                <Login />
                <hr />
                <Register />
            </div>
            </div>
        </>
    )
}

export default Products