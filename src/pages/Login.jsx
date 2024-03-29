import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/Auth/AuthContext'

const Login = () => {
    // RECOGER DATOS DE CONTEXT (recoger datos de la nube)
    const { errorMessage, email, setEmail, password, setPassword, usersData, fetchDataUsers, setLoginStatus } = useAuthContext();
    const bcrypt = require("bcryptjs");

    // Si el mensaje de error esta vacio, devuelve validate con los errores que tenga el usuario
    const errorAux = () => {
        if(errorMessage === '') {
            return validate(email, password);
        }
    } 

    const login = (email, password) => {
        const findUser = usersData.find((e) => e.email === email);
        let compare = bcrypt.compareSync(password, findUser.password);

        if (compare) {
            sessionStorage.setItem('Logged', true);
            localStorage.setItem('Logged', JSON.stringify(findUser));
            fetchDataUsers();
            setLoginStatus(true);
        } else {
            console.log('error');
        }
    }


    
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">

                <form className='form-login col-10' onSubmit={(e) => {
                    e.preventDefault();
                    login(email, password);
                }}>

                    <div className='d-flex flex-column align-items-center justify-content-center shadow'>
                        <div className='row col-12'>
                            <h5 className='bg-primary text-white text-center font-weight-bolder p-1'>Login</h5>
                        </div>
                        <div className="col-6 mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control col-12" name="email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4 col-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control col-12" name="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="row col-6 mb-2 mt-1">
                            <button type="submit" className="mb-3 btn btn-primary btn-block p-2">Submit</button>
                        </div>
                        <p className='text-danger'>{errorAux()} {errorMessage}</p>
                        <p className='text-white'>Don't have a account? <Link to="/register" className='text-decoration-none text-warning'>Sign up!</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

const validate = (email, password) => {
    if (!email.includes('@')) {
        return 'Write a valid email';
    } else if (password.length < 4) {
        return 'Enter your password';
    }
}

export default Login