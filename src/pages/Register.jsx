import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/Auth/AuthContext';

const Register = () => {
    const bcrypt = require("bcryptjs");
    const navigate = useNavigate();  
    const { setHelperRegister, usersData, errorRegister, setErrorRegister, fetchDataUsers, setLoginStatus } = useAuthContext();
    
    const register = (e) => {
        e.preventDefault();
        const saltRounds = 10;
        
        if (validate(e) === true) {
            bcrypt.hash(e.target.passwordRegister.value, saltRounds, (err, passHashed) => {
                if (err) {
                    console.log("Error hash:", err);
                } else {
                    
                    const newUser = {
                        id: uuidv4(),
                        email: e.target.emailRegister.value,
                        password: passHashed,
                        firstName: e.target.firstNameRegister.value,
                        lastName: e.target.lastNameRegister.value,
                        address: e.target.addressRegister.value,
                        postalCode: e.target.postalCodeRegister.value,
                    }
                    
                    if (!usersData.find((elem) => elem.email === newUser.email)) {
                        fetch('http://localhost:3000/users', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res => res.json())
                        .then(() => fetchDataUsers())
                        .then(() => sessionStorage.setItem('Logged', true))
                        .then(() => localStorage.setItem('Logged', JSON.stringify(newUser)))
                        .then(() => setLoginStatus(true))
                        .catch(error => console.log(error));
                        
                        setHelperRegister(true)
                        setErrorRegister(null);
                    } else {
                        setHelperRegister(false)
                        setErrorRegister('Email already exists');
                    }
                }
            });
        }
    }
    

    return (
        <>
            <form onSubmit={(e) => {
                register(e)
            }}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='row col-4 text-center'>
                        <h5 className='mb-3 mt-3 alert alert-danger'>Register</h5>
                    </div>

                    <div className="row col-6">
                        <div className='col-12'>
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="emailRegister" required />
                        </div>
                    </div>
                    <div className="row col-6 mt-2 mb-3">
                        <div className="col-12">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="passwordRegister" required />
                        </div>
                    </div>
                    <div className="row col-6 mb-3 d-flex align-items-center justify-content-center ">
                        <div className="col-6">
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control form-double" name="firstNameRegister" required />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control form-double" name="lastNameRegister" required />
                        </div>
                    </div>

                    <div className='row mb-3 d-flex align-items-center justify-content-center col-6'>
                        <div className="col-6">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control form-double" name="addressRegister" required />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Postal code</label>
                            <input type="text" className="form-control form-double" name="postalCodeRegister" required />
                        </div>
                    </div>
                    
                    <button type="submit" id="btn-reg" className="btn btn-primary mt-3 mb-3">Submit</button>
                    <p className='text-center text-danger mb-3'><b>{errorRegister}</b></p>
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
    } else {
        return true;
    }
}

export default Register