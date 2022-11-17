import { useEffect } from 'react';
import { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { v4 as uuidv4 } from 'uuid';

const Register = () => {

    
    
    
    const {usersData, setUsersData, fetchDataUsers} = useContext(MainContext);
    
    // useEffect(() => {
        
    // }, [])
        
        const register = (e) => {
            e.preventDefault();

            const newUser = {
                id: uuidv4(),
                email: e.target.emailRegister.value,
                password: e.target.passwordRegister.value,
                firstName: e.target.firstNameRegister.value,
                lastName: e.target.lastNameRegister.value,
                address: e.target.addressRegister.value,
                postalCode: e.target.postalCodeRegister.value,
                cardNumber: e.target.cardNumber.value,
                cardOwner: e.target.owner.value,
                expDate: e.target.expirationDate.value,
                CVC: e.target.cvc.value,
            }

            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

            setUsersData(newUser);            
        }

        //const errorMessageRegister = validateRegister();
        
    return (
        <>
            <form onSubmit={(e) => {
                register(e);
            }}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='row'>
                        <div className='col-12'>
                            <h5 className='mb-3'>Register</h5>
                        </div>
                    </div>
                    
                    <div className="col-10">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="emailRegister" />
                    </div>
                    <div className="col-10">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="passwordRegister" />
                    </div>

                    <div className='row d-flex align-items-center justify-content-center form-group'>
                        <div className="col-6">
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control form-double" name="firstNameRegister" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" name="lastNameRegister" />
                        </div>
                    </div>

                    <div className='row mb-3 d-flex align-items-center justify-content-center form-group'>
                        <div className="col-6">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" name="addressRegister" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Postal code</label>
                            <input type="text" className="form-control" name="postalCodeRegister" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <h5 className='mb-3'>Credit card data</h5>
                        </div>
                    </div>

                        <div className="col-10">
                            <label className="form-label">Card number</label>
                            <input type="text" className="form-control" name="cardNumber" />
                        </div>
                        <div className="col-10">
                            <label className="form-label">Name of owner</label>
                            <input type="text" className="form-control" name="owner" />
                        </div>

                    <div className="row mb-3 d-flex align-items-center justify-content-center form-group">
                        <div className="col-6">
                            <label className="form-label">Expiration date</label>
                            <input type="date" className="form-control" name="expirationDate" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">CVC</label>
                            <input type="number" className="form-control" name="cvc" />
                        </div>
                    </div>

                    {/* <p className='text-danger'>{errorMessageRegister}</p> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

// const validateRegister = (emailRegister, passwordRegister, firstNameRegister, lastNameRegister, addressRegister, postalCodeRegister, cardNumber, owner, cvc) => {
//     if ((!emailRegister.includes('@')) && (passwordRegister.length < 3) && (firstNameRegister.length < 3) && lastNameRegister.length < 3 && addressRegister.length < 5 && postalCodeRegister.length === 5 && cardNumber < 16 && owner.length < 3 && cvc.length === 3) return 'Complete all the fields';
// }

export default Register