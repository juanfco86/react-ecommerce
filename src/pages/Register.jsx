import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/Auth/AuthContext';
import { useEffect } from 'react';

const Register = () => {

    
    const { setHelperRegister, bcrypt, passwordHashed, setPasswordHashed, password, setPassword, usersData, errorRegister, setErrorRegister } = useAuthContext();
    const navigate = useNavigate();  
    
    useEffect(() => {
        const saltRounds = 10;
        setPasswordHashed(bcrypt.hash(password, saltRounds, (err, passHashed) => {
            if (err) {
                console.log("Error hash:", err);
            } else {
                return setPasswordHashed(passHashed);
            }
        }));
    }, [password])

    const register = (e) => {
        e.preventDefault();
        
        const newUser = {
            id: uuidv4(),
            email: e.target.emailRegister.value,
            password: passwordHashed,
            firstName: e.target.firstNameRegister.value,
            lastName: e.target.lastNameRegister.value,
            address: e.target.addressRegister.value,
            postalCode: e.target.postalCodeRegister.value,
            cardNumber: e.target.cardNumber.value,
            cardOwner: e.target.owner.value,
            expDate: e.target.expirationDate.value,
            CVC: e.target.cvc.value,
        }
        
        if (validate(e) === true && !usersData.find((elem) => elem.email === newUser.email)) {
            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(navigate('/login'))
                .catch(error => console.log(error))
                
                setHelperRegister(true);
                setErrorRegister(null);
            } else {
                setHelperRegister(false);
                setErrorRegister('Email already exists');
            }
        
    }

    return (
        <>
            <form onSubmit={(e) => {
                register(e)
                //passToHash(password)
            }}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='row'>
                        <div className='col-12'>
                            <h5 className='mb-3'>Register</h5>
                        </div>
                    </div>

                    <div className="col-10">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="emailRegister" required />
                    </div>
                    <div className="col-10">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="passwordRegister" onChange={e => setPassword(e.target.value)} required />
                    </div>

                    <div className='row d-flex align-items-center justify-content-center form-group'>
                        <div className="col-6">
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control form-double" name="firstNameRegister" required />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" name="lastNameRegister" required />
                        </div>
                    </div>

                    <div className='row mb-3 d-flex align-items-center justify-content-center form-group'>
                        <div className="col-6">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" name="addressRegister" required />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Postal code</label>
                            <input type="text" className="form-control" name="postalCodeRegister" required />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <h5 className='mb-3'>Credit card data</h5>
                        </div>
                    </div>

                    <div className="col-10">
                        <label className="form-label">Card number</label>
                        <input type="text" className="form-control" name="cardNumber" defaultValue="1111111111111111" required />
                    </div>
                    <div className="col-10">
                        <label className="form-label">Name of owner</label>
                        <input type="text" className="form-control" name="owner" defaultValue="1111" required />
                    </div>

                    <div className="row mb-3 d-flex align-items-center justify-content-center form-group">
                        <div className="col-6">
                            <label className="form-label">Expiration date</label>
                            <input type="date" className="form-control" name="expirationDate" required />
                        </div>
                        <div className="col-6">
                            <label className="form-label">CVC</label>
                            <input type="number" className="form-control" name="cvc" defaultValue="111" required />
                        </div>
                    </div>

                    {/* <p className='text-danger'>{ errorReg() }</p> */}
                    <p className='text-center text-danger'><b>{errorRegister}</b></p>
                    <button type="submit" id="btn-reg" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </>
    )
}

const validate = (e) => {
    if (e.target.passwordRegister.value.length < 4) {
        return false;
    } else if (!e.target.emailRegister.value.includes('@')) {
        return false;
    } else if (e.target.firstNameRegister.value.length < 2) {
        return false;
    } else if (e.target.lastNameRegister.value.length < 2) {
        return false;
    } else if (e.target.addressRegister.value.length < 5) {
        return false;
    } else if (e.target.postalCodeRegister.value.length !== 5) {
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

export default Register