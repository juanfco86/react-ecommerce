import { useEffect } from 'react'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {

    const [getUser, setGetUser] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperRegister, setHelperRegister] = useState(false);
    const [loginStatus, setLoginStatus] = useState(sessionStorage.getItem('Logged') ?? false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorRegister, setErrorRegister] = useState('');
    const urlUsers = "http://localhost:3000/users";

    const fetchDataUsers = useCallback(async () => {
        try {
            const response = await fetch(urlUsers);
            const data = await response.json();
            setUsersData(data);
        } catch {
            console.log("Error");
        }
    }, [])
    
    const logout = useCallback(function() {
        sessionStorage.removeItem('Logged');
        localStorage.removeItem('Logged');
        setLoginStatus(false);
    }, [])

    useEffect(() => {
        fetchDataUsers();
    }, [fetchDataUsers])

    useEffect(() => {
        setGetUser(JSON.parse(localStorage.getItem('Logged')));
    }, [fetchDataUsers, usersData, logout])

    const value = useMemo(() => ({
            logout,
            loginStatus,
            setLoginStatus,
            errorMessage,
            setErrorMessage,
            errorRegister,
            setErrorRegister,
            usersData,
            email,
            password,
            setEmail,
            setPassword,
            helperRegister,
            setHelperRegister,
            fetchDataUsers,
            getUser,
            setGetUser
        }),
        [logout, loginStatus, email, password, errorMessage, errorRegister, helperRegister, usersData, fetchDataUsers, getUser]
    );


    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider