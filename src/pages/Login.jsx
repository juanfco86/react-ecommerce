import React from 'react'

const Login = () => {
    return (
        <form>
            <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                <div className="mb-3 form-group col-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control col-12" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 form-group col-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control col-12" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Login