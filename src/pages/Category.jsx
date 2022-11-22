import { Link } from "react-router-dom"
import rods from '../assets/img/rods.jpg'
import reels from '../assets/img/reels.jpg'
import baits from '../assets/img/baits.jpg'
import accesories from '../assets/img/accesories.jpg'

const Category = () => {
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center mb-3">
                <div className="col-4 mb-3 d-flex justify-content-center align-items-center btn-container">
                    <img src={ rods } className="background-img-rods" />
                    <Link to='/rods' className="btn-category-style"><button className="btn button-6 btn-category">Fishing Rods</button></Link>
                </div>
                <div className="col-4 mb-3 d-flex justify-content-center align-items-center btn-container">
                    <img src={ reels } className="background-img-reels" />
                    <Link to='/reels' className="btn-category-style"><button className="btn button-6 btn-category">Reels</button></Link>
                </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mb-3">
                <div className="col-4 mb-3 d-flex justify-content-center align-items-center btn-container">
                    <img src={ baits } className="background-img-baits" />
                    <Link to='/' className="btn-category-style"><button className="btn button-6 btn-category">Baits</button></Link>
                </div>
                <div className="col-4 mb-3 d-flex justify-content-center align-items-center btn-container">
                    <img src={ accesories } className="background-img-accesories" />
                    <Link to='/' className="btn-category-style" tabIndex="1"><button className="btn button-6 btn-category">Accesories</button></Link>
                </div>
            </div>

        </>
    )
}

export default Category