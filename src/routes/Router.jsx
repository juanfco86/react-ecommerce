import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/category" element={ <Products /> } />
    </Routes>
  )
}

export default Router