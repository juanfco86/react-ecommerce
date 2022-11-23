import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/Auth/AuthContext'

const PrivateRoute = () => {
    const { loginStatus } = useAuthContext();

    if (!loginStatus) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default PrivateRoute