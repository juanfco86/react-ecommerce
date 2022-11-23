import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
    // IMPORTANDO ENCRIPTADOR DE CONTRASEÑAS
    const bcrypt = require("bcryptjs");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordHashed, setPasswordHashed] = useState('');
    const [passwordValidate, setPasswordValidate] = useState('');
    const [usersData, setUsersData] = useState([]);
    const [helperRegister, setHelperRegister] = useState(false);
    const [loginStatus, setLoginStatus] = useState(sessionStorage.getItem('Logged') ?? false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorRegister, setErrorRegister] = useState('');
    const urlUsers = "http://localhost:3000/users";

    // Pasar a CONTEXT los fetch --> setUsetData y setProduct
    const fetchDataUsers = () => {
        try {
            setTimeout(async () => {
                const response = await fetch(urlUsers);
                const dataUsers = await response.json();
                setUsersData(dataUsers);
            }, 50)
        } catch {
            console.log("Error");
        }
    }

    
    const login = useCallback(function(email, password) {
        console.log(passwordHashed);
        console.log(password);
        //console.log(usersData.find((elem) => elem.password === password));
        const checkPassword = (password) => {
            bcrypt.compare(password, passwordHashed, (err, coincide) => {
                if (err) {
                    console.log('Error:', err);
                } else {
                    setPasswordValidate(coincide);
                }
            })
        } 
        
        // Busca los usuarios que coincidan con ese email y password
        const findUser = usersData.find((elem) => elem.password === password) && usersData.find((elem) => elem.email === email)
        console.log(findUser);
        if (findUser) {
            sessionStorage.setItem('Logged', true);
            localStorage.setItem('Logged', JSON.stringify(findUser));
            setLoginStatus(true);
        } else {
            return setErrorMessage('Email or password incorrect');
        }
    })

    const logout = useCallback(function() {
        sessionStorage.removeItem('Logged');
        localStorage.removeItem('Logged');
        setLoginStatus(false);
    }, [])

    useEffect(() => {
        fetchDataUsers();
    }, [])

    const value = useMemo(() => ({
            login,
            logout,
            loginStatus,
            errorMessage,
            setErrorMessage,
            errorRegister,
            setErrorRegister,
            usersData,
            fetchDataUsers,
            email,
            password,
            setEmail,
            setPassword,
            helperRegister,
            setHelperRegister,
            bcrypt,
            passwordHashed,
            setPasswordHashed
        }),
        [login, logout, loginStatus, email, password, passwordHashed]
    );

    

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider