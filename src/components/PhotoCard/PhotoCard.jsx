import * as photos from '../../assets/img'
import CountApp from '../CountApp/CountApp';
import './PhotoCard.css'

const PhotoCard = ({ name, price, img, stock }) => {
  

    const imgProduct = photos[`photo${img}`];

  return (
    <>
          <div className="prod_box">
                <div className="center_prod_box">
                    <div className="product_title"><a className='withoutStyle' href="#">{ name }</a></div>
                    <div className="product_img"><a className='withoutStyle' href="#"><img className='photo' src={ imgProduct } alt={ name } border="0" /></a></div>
                    
                    <div className='prod_container'>
                        <div className='prod_container_secondary'>
                          <div className="prod_price"><span className="price"><b>Price:</b>  { price } €</span></div>
                          <div className="prod_stock"><span className="stock"><b>Stock:</b>  { stock }</span></div>
                        </div>
                        <a href="#" className="nav add-cart"><button className="button-6">Buy<i className="fa-solid fa-cart-plus"></i></button></a>
                    </div>
                        <CountApp />
            
                </div>
          </div>
    </>
  )
}

export default PhotoCard