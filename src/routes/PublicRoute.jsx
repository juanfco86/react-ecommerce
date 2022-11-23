import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/Auth/AuthContext'

const PublicRoute = () => {
    const { loginStatus } = useAuthContext();

    if (loginStatus) {
        return <Navigate to='/user' />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default PublicRoute