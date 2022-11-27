import { useEffect, useState } from 'react';
import ModalEdit from '../components/ModalEdit/ModalEdit';
import { useAuthContext } from '../context/Auth/AuthContext';

const User = () => {
    // RECOGER DATOS DE CONTEXT (recoger datos de la nube)
    //const { findUser } = useAuthContext();
    const url = "http://localhost:3000/orders";
    const [orders, setOrders] = useState([]);
    const findUser = JSON.parse(localStorage.getItem('Logged'));
    const myOrders = orders.filter((e) => e.idUser === findUser.id);

    useEffect(() => {
        fetchOrders();
    }, [])

    // COGE LA INFORMACION DEL SERVIDOR
    const fetchOrders = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setOrders(data);
        } catch {
            console.log("Error");
        }
    }

    return (
        <>  
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h5 className="mt-3 mb-3 alert alert-danger">Welcome back, {findUser.firstName}</h5>
                <div className="d-flex flex-column align-items-flex-end justify-content-center p-3">
                    <h6 className="mt-3">User information</h6>
                    <p>{findUser.firstName} {findUser.lastName}</p>

                    <h6 className="mt-3">Contact email</h6>
                    <p>{findUser.email}</p>

                    <h6 className="mt-3">Shipping address</h6>
                    <p>{findUser.address}</p>

                    <h6>Postal code</h6>
                    <p>{findUser.postalCode}</p>
                </div>
                <ModalEdit />
                <button className="btn button-6 m-2">Orders</button>
            </div>
            <div>
                {
                    myOrders.map((e) => {
                        return (
                            <>
                                <p>{e.firstName}</p>
                                <p>{e.lastName}</p>
                                {
                                    (e.products).map((x) => {
                                        return (
                                            <>
                                                <p>{x.name}</p>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default User