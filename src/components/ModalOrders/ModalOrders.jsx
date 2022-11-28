import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../../context/Auth/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import * as photos from '../../assets/img'

const ModalOrders = () => {
    const { getUser } = useAuthContext();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const url = "http://localhost:3000/orders";
    const [orders, setOrders] = useState([]);
    const myOrders = orders.filter((e) => e.idUser === getUser.id);

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
            <Button variant="primary" className='btn button-6' onClick={handleShow}>
                Orders
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='modal-color'>
                    {
                        myOrders.map((e, index) => {
                            return (
                                <>
                                    <div className='m-3'>
                                        <h4>User: {e.firstName}</h4>
                                        <p>Order #{index + 1}</p>
                                        {
                                            (e.products).map((x) => {
                                                return (
                                                    <>
                                                        <tr key={uuidv4()}>
                                                            <td className='td-obj td-photo'><img src={photos[`photo${x.img}`]} alt={x.name} className='photo-price-cart' /></td>
                                                            <td className='td-obj td-styles td-name'><b>{x.name}</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td className='td-obj td-styles'><b>Qty. {x.amount}</b></td>
                                                            <td className='td-obj td-styles'><b>Price: {x.price * x.amount} €</b></td>
                                                            <td className='td-obj td-styles'></td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        })
                    }    
                        <div className="row mt-3 align-items-center justify-content-center">
                            <div className='d-flex align-items-center justify-content-center col-3'>
                                <Button variant="secondary" onClick={handleClose}>
                                    Back
                                </Button>
                            </div>
                        </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalOrders
