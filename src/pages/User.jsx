import ModalEdit from '../components/ModalEdit/ModalEdit';
import { useAuthContext } from '../context/Auth/AuthContext';

const User = () => {
    // RECOGER DATOS DE CONTEXT (recoger datos de la nube)
    const { dataUser } = useAuthContext();

    return (
        <>  
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h5 className="mt-3 mb-3 alert alert-danger">Welcome back, {dataUser.firstName}</h5>
                <div className="d-flex flex-column align-items-flex-end justify-content-center p-3">
                    <h6 className="mt-3">User information</h6>
                    <p>{dataUser.firstName} {dataUser.lastName}</p>

                    <h6 className="mt-3">Contact email</h6>
                    <p>{dataUser.email}</p>

                    <h6 className="mt-3">Shipping address</h6>
                    <p>{dataUser.address}</p>

                    <h6>Postal code</h6>
                    <p>{dataUser.postalCode}</p>
                </div>
                <ModalEdit />
                <button className="btn button-6 m-2">Orders</button>
            </div>
        </>
    )
}

export default User