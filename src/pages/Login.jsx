import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
        }}>
            <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                <div className="mb-3 form-group col-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control col-12" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 form-group col-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control col-12" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
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

export default Login