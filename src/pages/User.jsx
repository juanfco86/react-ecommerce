import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const User = () => {
    
    const { loginStatus, setLoginStatus } = useContext(MainContext);

    const userInfo = JSON.parse(sessionStorage.getItem('Logged'))

    return (
        <>
            {
                    <div>
                        <h5>Welcome {userInfo.firstName}</h5>

                        <h6>User information</h6>
                        <p>{userInfo.firstName} {userInfo.lastName}</p>

                        <h6>Contact email</h6>
                        <p>{userInfo.email}</p>

                        <h6>Shipping address</h6>
                        <p>{userInfo.address}</p>
                        
                        <p>Postal code {userInfo.postalCode}</p>

                        <Link to='/'><button>See more products!</button></Link>
                        <Link to='/products'><button>Go to cart</button></Link>
                        
                    </div>
            }
        </>
    )
}

export default User