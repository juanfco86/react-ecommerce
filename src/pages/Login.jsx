import React from 'react'
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
    const {usersData, setUsersData, fetchDataUsers} = useContext(MainContext);
    
    useEffect(() => {
        fetchDataUsers();
    }, [])
    
    const errorMessage = validate(email, password);
    
    const login = (email, password) => {
        const findUser = usersData.find((elem) => elem.email === email) && usersData.find((elem) => elem.password === password)

        if (findUser) {
            sessionStorage.setItem('Logged', JSON.stringify(findUser));
            navigate('/');
        } else {
            alert('incorret')
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
                    <button type="submit" className="mb-4 btn btn-primary" disabled={errorMessage}>Submit</button>
                    <p className='text-danger'>{errorMessage}</p>
                    {/* <div>
                        <p>You don't have an account? <Link to="/account" className='link-reg'>Sign up!</Link></p>
                    </div> */}
                    <p>Don't have a account? <Link to="/register">Create here!</Link></p>
                </div>
            </form>
        </>
    )
}


const validate = (email, password) => {
    if (!email.includes('@')) return 'Write a valid email';
    if (password.length < 3) return 'Enter your password'
}


export default Login