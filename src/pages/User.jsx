import ModalEdit from '../components/ModalEdit/ModalEdit';
import ModalOrders from '../components/ModalOrders/ModalOrders';
import { useAuthContext } from '../context/Auth/AuthContext';

const User = () => {
    // RECOGER DATOS DE CONTEXT (recoger datos de la nube)
    const { getUser } = useAuthContext();

    return (
        <>  
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h5 className="mt-3 mb-3 alert alert-danger">Welcome back, {getUser.firstName}</h5>
                <div className="d-flex flex-column align-items-flex-end justify-content-center p-3 style-user-container mb-3">
                    <div className="row style-user">
                        <h5 className="mt-2">User information</h5>
                    </div>
                        <p className='text-center'><b>{getUser.firstName} {getUser.lastName}</b></p>
                    <div className="row style-user">
                        <h5 className="mt-2">Contact email</h5>
                    </div>
                        <p className='text-center'><b>{getUser.email}</b></p>
                    <div className="row style-user">
                        <h5 className="mt-2">Shipping address</h5>
                    </div>
                        <p className='text-center'><b>{getUser.address}</b></p>
                    <div className="row style-user">
                        <h5 className='mt-2'>Postal code</h5>
                    </div>
                        <p className='text-center'><b>{getUser.postalCode}</b></p>
                </div>
                <div className="row">
                    <div className="col-7">
                        <ModalEdit />
                    </div>
                    <div className="col-3">
                        <ModalOrders />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default User