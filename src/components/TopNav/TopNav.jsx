
import React from 'react'
import photo from '../../assets/img/logo.png'
import './TopNav.css'

const TopNav = () => {
    return (
        <>
            <div id="main_content">
                <div id="menu_tab">
                    <ul className="menu">
                        <div id="logo">
                            <a href="#"><img src={ photo } alt="Logo image" border="0" width="130" height="110" /></a>
                        </div>
                        <li><a href="#" className="nav"><button className="button-6" role="button">Home</button></a></li>
                        <li><a href="#" className="nav"><button className="button-6" role="button">Products</button></a></li>
                        <li><a href="#" className="nav"><button className="button-6" role="button">Specials</button></a></li>
                        <li><a href="#" className="nav"><button className="button-6" role="button">Shipping<i className="fa-solid fa-cart-shopping"></i></button></a></li>
                        <li><a href="#" className="nav"><button className="button-6" role="button">Account</button></a></li>
                        <li><a href="#" className="nav"><button className="button-6" role="button">Sign Up</button></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopNav