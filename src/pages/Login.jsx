import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const errorMessage = validate(email, password);

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();

                login(email, password);
            }}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className="mb-3 form-group col-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control col-12" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 form-group col-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control col-12" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="mb-4 btn btn-primary" disabled={errorMessage}>Submit</button>
                    <p className='text-danger'>{errorMessage}</p>
                    <div>
                        <p>You don't have an account? <Link to="/account" className='link-reg'>Sign up!</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}
// INCLUIR EN LA DB
const login = (email, password) => {
    if (email === "juan@gmail.com" && password === '1234') {
        alert('correct')
    } else {
        alert('incorret')
    }
}

const validate = (email, password) => {
    if (!email.includes('@')) return 'Write a valid email';
    if (password.length < 1) return 'Enter your password'
}

export default Login