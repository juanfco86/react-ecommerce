import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/Auth/AuthContext";
import { MainContext } from "../context/Main/MainContext";
import { v4 as uuidv4 } from 'uuid';
import * as photos from '../assets/img'

const Payed = () => {
    const { dataUser } = useAuthContext();
    const { buy, setBuy } = useContext(MainContext);
    const restartCart = () => {
        setBuy([]);
    }

    return (
        <>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h3 className="alert alert-danger">{dataUser.firstName}, thanks for your purchase!!</h3>
            {
                buy?.map((card) => {
                    return (
                        <>
                            <div key={uuidv4()}>
                                <span className=''><img src={photos[`photo${card.img}`]} alt={card.name} className='photo-price-cart' /></span>
                                <span className='bg-white p-3'><b>{card.name}</b></span>
                            </div>
                        </>
                    )
                })
            }
            <p className="alert alert-success mt-3">You order will arrive in the next few days</p>

            <div className="col mb-3">
                <Link to={'/'} className="withoutStyle"><button className="btn button-6 m-2" onClick={restartCart}>Go home</button></Link>
                <button className="btn button-6 m-2">Orders</button>
            </div>
        </div>
        </>
    )
}

export default Payed