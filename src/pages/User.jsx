
const User = () => {
    
    const dataFromUsers = JSON.parse(localStorage.getItem('Logged'));

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h5 className="mt-3 mb-3">Welcome back, {dataFromUsers.firstName}</h5>
                <h6 className="mt-3">User information</h6>
                <p>{dataFromUsers.firstName} {dataFromUsers.lastName}</p>

                <h6 className="mt-3">Contact email</h6>
                <p>{dataFromUsers.email}</p>

                <h6 className="mt-3">Shipping address</h6>
                <p>{dataFromUsers.address}</p>

                <h6>Postal code</h6>
                <p>{dataFromUsers.postalCode}</p>

            </div>
        </>
    )
}

export default User