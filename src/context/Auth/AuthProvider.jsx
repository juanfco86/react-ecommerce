import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
    // IMPORTANDO ENCRIPTADOR DE CONTRASEÑAS
    const bcrypt = require("bcryptjs");

    const [dataUser, setDataUser] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperRegister, setHelperRegister] = useState(false);
    const [loginStatus, setLoginStatus] = useState(sessionStorage.getItem('Logged') ?? false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorRegister, setErrorRegister] = useState('');
    const urlUsers = "http://localhost:3000/users";

    // Pasar a CONTEXT los fetch --> setUsetData y setProduct
    const fetchDataUsers = useCallback(async () => {
        try {
            const response = await fetch(urlUsers);
            const data = await response.json();
            //fetchDataUsers();
            setUsersData(data);
        } catch {
            console.log("Error");
        }
    }, [])
    
    const login = useCallback(function(email, password) {
        usersData.find((elem) => {
            if (elem.email === email) {
                bcrypt.compare(password, elem.password, (err, coincide) => {
                    if (err) {
                        return console.log('Error:', err);
                    } else if (coincide) {
                        // SI LA CONTRASEÑA ES IGUAL HACE ESTO
                        sessionStorage.setItem('Logged', true);
                        localStorage.setItem('Logged', JSON.stringify(elem));
                        fetchDataUsers();
                        return setLoginStatus(true);
                    } else {
                        return setErrorMessage('Password incorrect')
                    }
                })
            } else {
                return setErrorMessage('Email incorrect')
            }
            return '';
        });
    }, [bcrypt, usersData, fetchDataUsers])
    
    const logout = useCallback(function() {
        sessionStorage.removeItem('Logged');
        localStorage.removeItem('Logged');
        setLoginStatus(false);
    }, [])

    useEffect(() => {
        fetchDataUsers();
    }, [fetchDataUsers])

    useEffect(() => {
        setDataUser(JSON.parse(localStorage.getItem('Logged')));
    }, [fetchDataUsers, usersData])

    const value = useMemo(() => ({
            login,
            logout,
            loginStatus,
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
            dataUser,
            setDataUser,
            fetchDataUsers
        }),
        [login, logout, loginStatus, email, password, errorMessage, errorRegister, helperRegister, usersData, dataUser, fetchDataUsers]
    );


    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider