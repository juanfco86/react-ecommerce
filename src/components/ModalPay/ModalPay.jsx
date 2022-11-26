import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const ModalPay = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const findUser = JSON.parse(localStorage.getItem('Logged'));

    const shipping = (e) => {
        e.preventDefault();

        if (validateShipping(e) === true) {
            const user = {
                ...findUser,
                firstName: e.target.firstNameShipping.value,
                lastName: e.target.lastNameShipping.value,
                address: e.target.addressShipping.value,
                postalCode: e.target.postalCodeShipping.value,
                cardNumber: e.target.cardNumber.value,
                cardOwner: e.target.owner.value,
                expDateMonth: e.target.expirationDateMonth.value,
                expDateYear: e.target.expirationDateYear.value,
                CVC: e.target.cvc.value
            }
            
            fetch(`http://localhost:3000/users/${findUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(rest => localStorage.setItem('Logged', JSON.stringify(rest)))
            .then(navigate('/payed'))
            .catch(e => console.log(e));
        }
    }
    
    return (
        <>
            <Button variant="primary" className='btn button-6' onClick={handleShow}>
                Pay <i className="fa-solid fa-credit-card"></i>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                {
                    <form onSubmit={(e) => {
                        shipping(e)
                    }}>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div className='row mt-3 mb-2 col-10 text-center'>
                                <h5 className='mb-2 mt-2 alert alert-danger'>Shipping address confirmation</h5>
                            </div>
                            <div className="row col-10 mb-2 d-flex align-items-center justify-content-center ">
                                <div className="col-6">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.firstName} name="firstNameShipping" required />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.lastName} name="lastNameShipping" required />
                                </div>
                            </div>
                            <div className="row col-10 mb-2">
                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.address} name="addressShipping" required />
                                </div>
                            </div>
                            <div className='row mb-2 d-flex align-items-center justify-content-flex-end col-10'>
                                <div className="col-6">
                                    <label className="form-label">Postal code</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.postalCode} name="postalCodeShipping" required />
                                </div>
                            </div>
                            <div className='row mt-3 mb-2 col-10 text-center'>
                                <h5 className='mb-2 mt-2 alert alert-danger'>Credit card</h5>
                            </div>
                            <div className="row col-10">
                                <div className="col-12">
                                    <label className="form-label">Card number</label>
                                    <input type="text" className="form-control" name="cardNumber" />
                                </div>
                            </div>
                            <div className='row col-10 mt-2'>
                                <div className="col-12">
                                    <label className="form-label">Name of owner</label>
                                    <input type="text" className="form-control" name="owner" />
                                </div>
                            </div>
                            <div className="row mb-3 d-flex align-items-center justify-content-center col-10 mt-2">
                                <div className="row col-8">
                                    <div className='col-12 mb-3'>
                                        <label>Expiration Date</label>
                                        <select className='col-6' onChange={(event) => console.log(event.target.value)} name="expirationDateMonth">
                                            <option value="01">January</option>
                                            <option value="02">February </option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select className='col-3' onChange={(event) => console.log(event.target.value)} name="expirationDateYear">
                                            <option value="22"> 22</option>
                                            <option value="23"> 23</option>
                                            <option value="24"> 24</option>
                                            <option value="25"> 25</option>
                                            <option value="26"> 26</option>
                                            <option value="27"> 27</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <label className="form-label">CVC</label>
                                    <input type="number" className="form-control form-double" name="cvc" />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-6'>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Back
                                    </Button>
                                </div>
                                <div className='col-6'>
                                    <Button variant="primary" type='submit'>
                                        Confirm
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalPay

const validateShipping = (e) => {
    if (e.target.firstNameShipping.value.length < 2) {
        return false;
    } else if (e.target.lastNameShipping.value.length < 2) {
        return false;
    } else if (e.target.addressShipping.value.length < 5) {
        return false;
    } else if (e.target.postalCodeShipping.value.length !== 5) {
        return false;
    } else if (e.target.cardNumber.value.length !== 19 && e.target.cardNumber.value.length !== 16) {
        return false;
    } else if (e.target.owner.value.length < 2) {
        return false;
    } else if (e.target.cvc.value.length !== 3) {
        return false;
    } else {
        return true;
    }
}
