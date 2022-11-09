
import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import photo from '../../assets/img/logo.png'
import './TopNav.css'

const TopNav = () => {

    const [search, setSearch] = useState('');

    if(search === 'reset') setSearch('Culo');

    return (
        <>
            <div id="main_content">
                <div id="menu_tab">
                    <ul className="menu">
                        <div id="logo">
                            <a href="#"><img src={ photo } alt="Logo image" border="0" width="130" height="110" /></a>
                        </div>
                        <li>
                            <Link to="/" className="nav"><button className="button-6" role="button">Home</button></Link>
                        </li>
                        <li>
                            <Link to="/category" className="nav"><button className="button-6" role="button">Category</button></Link>
                        </li>
                        <li>
                            <Link to="/products" className="nav"><button className="button-6" role="button">Cart<i className="fa-solid fa-cart-shopping"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/account" className="nav"><button className="button-6" role="button">Account</button></Link>
                        </li>
                        <li>
                            <Link to="/login" className="nav"><button className="button-6" role="button">Sign Up</button></Link>
                        </li>
                        <li>
                            <form>
                                <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} />
                                <button type="submit">Search</button>
                            </form>
                        </li> 
                        {/* // PRUEBA QUE ENVIA LA INFO INTRODUCIDA EN EL SEARCH 
                            // METERLO EN UN FILTER PARA PRODUCTOS?? */}
                        {search}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default memo(TopNav)