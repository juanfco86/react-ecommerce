import { useContext } from 'react'
import { MainContext } from '../context/Main/MainContext'
import * as photos from '../assets/img'
import TotalPrice from '../components/TotalPrice/TotalPrice';
import Login from './Login';
import { v4 as uuidv4 } from 'uuid';
import User from './User';
import ModalPay from '../components/ModalPay/ModalPay';
import { useAuthContext } from '../context/Auth/AuthContext';

const Products = () => {
    const { buy } = useContext(MainContext);
    const { loginStatus } = useAuthContext();

    return (
        <>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    <div className='col-8 div-double'>
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
                                                <td className='td-obj td-photo'><img src={photos[`photo${card.img}`]} alt={card.name} className='photo-price-cart' /></td>
                                                <td className='td-obj td-styles'><b>{card.name}</b></td>
                                                <td className='td-obj td-styles'><b>{card.price} €</b></td>
                                                <td className='td-obj td-styles'><b>{card.amount}</b></td>
                                                <td className='td-obj td-styles'><b>{card.price * card.amount} €</b></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td className='th-footer'>
                                    </td>
                                    <td className='th-footer' colSpan="2">
                                        <TotalPrice buy={ buy } />
                                    </td>
                                    <td className='th-footer'>
                                        {
                                            loginStatus ? <ModalPay /> : false
                                        }
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                }
                {
                    !!loginStatus ? (
                        <div className='col-4'>
                            <User />
                        </div>
                    ) : (
                        <div className='col-4'>
                            <Login />
                        </div>
                    )
                }
                <div className="row col-10 mt-3">
                    {
                        !loginStatus
                        ? (<p className='text-center alert alert-danger text-danger mt-3'><b>Log in to make the payment</b></p>)
                        : (<p></p>) 
                    }
                </div>
            </div>
        </>
    )
}

export default Products