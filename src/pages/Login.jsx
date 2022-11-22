import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // RECOGER DATOS DE CONTEXT (recoger datos de la nube)
    const { usersData, fetchDataUsers, setLoginStatus } = useContext(MainContext);
    
    useEffect(() => {
        fetchDataUsers();
    }, [])
    
    
    const login = (email, password) => {
        // Busca los usuarios que coincidan con ese email y password
        const findUser = usersData.find((elem) => elem.password === password) && usersData.find((elem) => elem.email === email)
        if (findUser) {
            sessionStorage.setItem('Logged', JSON.stringify(findUser));
            setLoginStatus(true);
            navigate('/user');
        } else {
            return setErrorMessage('Email or password incorrect');
        }
    }
    const [errorMessage, setErrorMessage] = useState('');
    // Si el mensaje de error esta vacio, devuelve validate con los errores que tenga el usuario
    const errorAux = () => {
        if(errorMessage === '') {
            return validate(email, password);
        }
    } 
    
    return (
        <>
            <form className='form-login' onSubmit={(e) => {
                e.preventDefault();
                login(email, password);
            }}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='row'>
                        <h5>Login</h5>
                    </div>
                    <div className="col-10">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control col-12" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control col-12" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="mb-4 btn btn-primary">Submit</button>
                    <p className='text-danger'>{errorAux()} {errorMessage}</p>
                    <p>Don't have a account? <Link to="/register">Create here!</Link></p>
                </div>
            </form>
        </>
    )
}

const validate = (email, password) => {
    if (!email.includes('@')) {
        return 'Write a valid email';
    } else if (password.length < 4) {
        return 'Enter your password';
    } 
    //else return "Email or password incorrect, try again!";
}

export default Login