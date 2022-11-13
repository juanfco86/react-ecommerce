import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Account from '../pages/Account'
import Prueba from '../components/Prueba/Prueba'
import WishList from '../pages/MainWish'
import Category from '../pages/Category'


const Router = () => {
  return (

    <Routes>
        <Route path="/prueba" element={ <Prueba /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/category" element={ <Category /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/wish" element={ <WishList /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="*" element="Error 404: Page not found" />
    </Routes>

  )
}

export default Router