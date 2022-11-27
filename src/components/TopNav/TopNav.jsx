import { memo } from 'react'
import { Link } from 'react-router-dom'
import mainPhoto from '../../assets/img/mainPhoto.avif'
import photo from '../../assets/img/logo.avif'
import './TopNav.css'
import { useAuthContext } from '../../context/Auth/AuthContext'

const TopNav = () => {
    const { loginStatus, logout, dataUser} = useAuthContext();
    const findUser = JSON.parse(localStorage.getItem('Logged'));

    return (
        <>
            <div id="main_content">
                <div id="menu_tab">
                    <ul className="menu">
                        <div>
                            <Link to="/"><img className='logo' src={ photo } alt="Logo" border="0" width="130" height="110" /></Link>
                        </div>
                        <li>
                            <Link to="/" className="nav"><button className="btn button-6 btn-nav">Home <i className="fa-solid fa-home"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/category" className="nav"><button className="btn button-6 btn-nav">Category <i className="fa-solid fa-diagram-predecessor"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/products" className="nav"><button className="btn button-6 btn-nav">Cart <i className="fa-solid fa-cart-shopping"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/wish" className="nav"><button className="btn button-6 btn-nav">Wish List <i className='fa-solid fa-heart icon-heart'></i></button></Link>
                        </li>
                        <li>
                            {
                                !!loginStatus ? (
                                    <Link to="/user" className="nav"><button className="btn button-6 btn-nav">{findUser.firstName} <i className="fa-solid fa-user"></i></button></Link>
                                ) : ""
                            }
                        </li>
                        <li>
                            {
                                !!loginStatus ? (
                                        <button onClick={ logout } className="btn button-6 btn-nav">Logout <i className="fa-solid fa-right-from-bracket"></i></button>
                                    ) : (<Link to="/login" className="nav"><button className="btn button-6 btn-nav">Login <i className="fa-solid fa-user"></i></button></Link>)
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12'>
                <img className='mainPhoto' src={ mainPhoto } alt="decoration" border="0" width="130" height="110" />
            </div>
        </>
    )
}

export default memo(TopNav)