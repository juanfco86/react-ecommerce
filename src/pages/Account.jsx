import React from 'react'

const Account = () => {
    return (
        <form className='d-flex flex-column align-items-center justify-content-center'>

            <div className='row'>
                <div className='col-12'>
                    <h5 className='mb-3'>User information</h5>
                </div>
            </div>

            <div className='row'>
                <div className="mb-3 col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
            </div>

            <div className='row'>
                <div className="mb-3 col">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname" />
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname" />
                </div>
            </div>

            <div className='row mb-3'>
                <div className="mb-3 col">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" />
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Postal code</label>
                    <input type="text" className="form-control" id="postalCode" />
                </div>
            </div>

            <div className='row'>
                <div className='col-12 mb-3'>
                    <h5 className='mb-3'>Credit card data</h5>
                </div>
            </div>

            <div className='row'>
                <div className="mb-3 col-12">
                    <label className="form-label">Card number</label>
                    <input type="text" className="form-control" id="address" name="address" />
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">Name of owner</label>
                    <input type="text" className="form-control" id="postalCode" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="mb-3 col-6">
                    <label className="form-label">Expiration date</label>
                    <input type="text" className="form-control" id="address" name="address" />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">CVC</label>
                    <input type="text" className="form-control" id="postalCode" />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Account