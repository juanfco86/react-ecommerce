import { memo } from 'react'
import { Link } from 'react-router-dom'
import mainPhoto from '../../assets/img/mainPhoto.avif'
import photo from '../../assets/img/logo.avif'
import './TopNav.css'
import { useAuthContext } from '../../context/Auth/AuthContext'
import DropdownNav from '../DropdownNav/DropdownNav'
import { Button } from 'react-bootstrap'

const TopNav = () => {
    const { loginStatus, logout } = useAuthContext();
    let user = JSON.parse(localStorage.getItem(`Logged`));

    return (
        <>
            <div id="main_content">
                <div id="menu_tab">
                    <ul className="menu">
                        <div>
                            <Link to="/"><img className='logo logo-display' src={ photo } alt="Logo" border="0" width="130" height="110" /></Link>
                        </div>
                        <li>
                            <Link to="/" className="nav"><Button variant="danger" className="btn button-6 btn-nav">Home <i className="fa-solid fa-home"></i></Button></Link>
                        </li>
                        <li>
                            <DropdownNav />
                        </li>
                        <li>
                            <Link to="/products" className="nav"><Button variant="danger" className="btn button-6 btn-nav">Cart <i className="fa-solid fa-cart-shopping"></i></Button></Link>
                        </li>
                        <li>
                            <Link to="/wish" className="nav"><Button variant="danger" className="btn button-6 btn-nav">Wish List <i className='fa-solid fa-heart icon-heart'></i></Button></Link>
                        </li>
                        <li>
                            {
                                !!loginStatus ? (
                                    <Link to="/user" className="nav"><Button variant="danger" className="btn button-6 btn-nav">{user.firstName} <i className="fa-solid fa-user"></i></Button></Link>
                                ) : ""
                            }
                        </li>
                        <li>
                            {
                                !!loginStatus ? (
                                        <Button variant="danger" onClick={ logout } className="btn button-6 btn-nav">Logout <i className="fa-solid fa-right-from-bracket"></i></Button>
                                    ) : (<Link to="/login" className="nav"><Button variant="danger" className="btn button-6 btn-nav">Login <i className="fa-solid fa-user"></i></Button></Link>)
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12 photo-display'>
                <img className='mainPhoto' src={ mainPhoto } alt="decoration" border="0" width="130" height="110" />
            </div>
        </>
    )
}

export default memo(TopNav)