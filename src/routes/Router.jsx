import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import WishList from '../pages/MainWish'
import Category from '../pages/Category'
import Register from '../pages/Register'
import User from '../pages/User'
import Reels from '../pages/Reels'
import Rods from '../pages/Rods'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <PublicRoute /> }>
                <Route path="/register" element={ <Register /> } />
                <Route path="/login" element={ <Login /> } />
            </Route>
            <Route path='/user' element={ <PrivateRoute /> }>
                <Route path='/user' element={ <User /> } />
            </Route>
            <Route index element={ <Home /> } />
            <Route path="/category" element={ <Category /> } />
            <Route path="/products" element={ <Products /> } />
            <Route path='/rods' element={ <Rods /> } />
            <Route path='/reels' element={ <Reels /> } />
            <Route path="/wish" element={ <WishList /> } />
            <Route path="*" element="Error 404: Page not found" />
        </Routes>
    )
}

export default Router