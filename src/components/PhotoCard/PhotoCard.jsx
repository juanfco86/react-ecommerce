import * as photos from '../../assets/img'

import './PhotoCard.css'


const PhotoCard = ( { id, name, price, stock, saveValue, img } ) => {
  //const [count, setCount] = useState(1);
  
  const imgProduct = photos[`photo${img}`];
  const product = {
    id: id,
    name: name,
    price: price,
    stock: stock,
    img: img
  };

  return (
    <>
          <div className="prod_box">
                <div className="center_prod_box">
                    <div className="product_title"><a className='withoutStyle' href="#">{ name }</a></div>
                    <div className="product_img"><a className='withoutStyle' href="#"><img className='photo withoutStyle' src={ imgProduct } alt={ name } border="0" /></a></div>
                    
                    <div className='prod_container'>
                        <div className='prod_container_secondary'>
                          <div className="prod_price"><span className="price"><b>Price:</b>  { price } €</span></div>
                          <div className="prod_stock"><span className="stock"><b>Stock:</b>  { stock }</span></div>
                        </div>
                        <button onClick={ () => { saveValue(product) } } className="button-6">Buy<i className="fa-solid fa-cart-plus"></i></button>
                    </div>
                        {/* <CountApp count={ count } setCount={ setCount } stock={ stock } /> */}
                </div>
          </div>
    </>
  )
}

export default PhotoCard