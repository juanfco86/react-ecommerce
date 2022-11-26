import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalEdit = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const findUser = JSON.parse(localStorage.getItem('Logged'));

    const edit = (e) => {
        e.preventDefault();

        if (validateEditUser(e) === true) {
            const user = {
                ...findUser,
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                address: e.target.address.value,
                postalCode: e.target.postalCode.value,
            }
            
            fetch(`http://localhost:3000/users/${findUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(user => localStorage.setItem('Logged', JSON.stringify(user)))
            .catch(e => console.log(e));
        }
    }
    
    return (
        <>
            <Button variant="primary" className='btn button-6' onClick={handleShow}>
                Edit user <i className="fa-solid fa-gear"></i>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                {
                    <form onSubmit={(e) => {
                        edit(e)
                    }}>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div className='row mt-3 mb-2 col-10 text-center'>
                                <h5 className='mb-2 mt-2 alert alert-danger'>Change user information</h5>
                            </div>
                            <div className="row col-10 mb-2 d-flex align-items-center justify-content-center ">
                                <div className="col-6">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.firstName} name="firstName" required />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.lastName} name="lastName" required />
                                </div>
                            </div>
                            <div className="row col-10 mb-2">
                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.address} name="address" required />
                                </div>
                            </div>
                            <div className='row mb-2 d-flex align-items-center justify-content-flex-end col-10'>
                                <div className="col-6">
                                    <label className="form-label">Postal code</label>
                                    <input type="text" className="form-control form-double" defaultValue={findUser.postalCode} name="postalCode" required />
                                </div>
                            </div>
                            
                            <div className="row mt-3">
                                <div className='col-6'>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Back
                                    </Button>
                                </div>
                                <div className='col-6'>
                                    <Button variant="primary" type='submit' onClick={handleClose}>
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

export default ModalEdit

const validateEditUser = (e) => {
    if (e.target.firstName.value.length < 2) {
        return false;
    } else if (e.target.lastName.value.length < 2) {
        return false;
    } else if (e.target.address.value.length < 5) {
        return false;
    } else if (e.target.postalCode.value.length !== 5) {
        return false;
    } else {
        return true;
    }
}
