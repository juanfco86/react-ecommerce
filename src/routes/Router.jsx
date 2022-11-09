import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Account from '../pages/Account'


const Router = () => {
  return (

    <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="/category" element={ <Category /> } /> */}
        <Route path="/products" element={ <Products /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="*" element="Error 404: Page not found" />
    </Routes>
    
  )
}

export default Router