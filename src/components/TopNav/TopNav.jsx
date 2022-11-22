
import { useContext } from 'react'
import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mainPhoto from '../../assets/img/mainPhoto.png'
import photo from '../../assets/img/logo.png'
import { MainContext } from '../../context/MainContext'
import './TopNav.css'

const TopNav = () => {

    const { loginStatus, setLoginStatus } = useContext(MainContext);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('Logged');
        setLoginStatus(false);
        navigate('/login');
    }

    return (
        <>
            <div id="main_content">
                <div id="menu_tab">
                    <ul className="menu">
                        <div>
                            <Link to="/"><img className='logo' src={ photo } alt="Logo image" border="0" width="130" height="110" /></Link>
                        </div>
                        <li>
                            <Link to="/" className="nav"><button className="btn button-6 btn-nav" role="button">Home <i className="fa-solid fa-home"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/category" className="nav"><button className="btn button-6 btn-nav" role="button">Category <i className="fa-solid fa-diagram-predecessor"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/products" className="nav"><button className="btn button-6 btn-nav" role="button">Cart <i className="fa-solid fa-cart-shopping"></i></button></Link>
                        </li>
                        <li>
                            <Link to="/wish" className="nav"><button className="btn button-6 btn-nav" role="button">Wish List <i className='fa-solid fa-heart icon-heart'></i></button></Link>
                        </li>
                        <li>
                            {
                                !!loginStatus ? (
                                    <button onClick={ logout } className="btn button-6 btn-nav">Logout</button>
                                    ) : (<Link to="/login" className="nav"><button className="btn button-6 btn-nav" role="button">Login <i className="fa-solid fa-user"></i></button></Link>)
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12'>
                <img className='mainPhoto' src={ mainPhoto } alt="image decoration" border="0" width="130" height="110" />
            </div>
        </>
    )
}

export default memo(TopNav)