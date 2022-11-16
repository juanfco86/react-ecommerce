import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as photos from '../../assets/img'
import './PhotoCard.css'


const PhotoCard = ( { id, name, price, stock, saveValue, img, amount, addWish, deleteWish } ) => {
  
  const product = {
    id: id,
    name: name,
    price: price,
    stock: stock,
    img: img,
    amount: amount,
  };
  
  const imgProduct = photos[`photo${img}`];

  const infoProv = JSON.parse(localStorage.getItem('Wish'));

  useEffect(() => {
    infoProv?.map((e) => {
      if(e.id === product.id) {
        const icon = document.getElementById(findId);
        icon.classList.add('fa-solid')
      }
    })
  }, [])
  

  const findId = `icon-heart${id}`;
  
  const heart = (product) => {

      const icon = document.getElementById(findId);
      icon.classList.toggle('fa-solid');
      
      if (icon.classList.contains('fa-solid')) {
          toast.success('Added to the wishlist successfully! 😊')
          addWish(product);
      } else {
          deleteWish(product);
          toast.error('Remove to the wishlist successfully! 😒')
      }

  };  
    
    return (
      <>
          <div className="prod_box">
                <div className="center_prod_box">
                    <div className="row">
                      <div>
                          <Toaster
                            position="bottom-right"
                            reverseOrder={false}
                          />
                      </div>
                    <button className='col-2 d-flex flex-column justify-content-center align-items-center btn btn-outline btn-wish'><i id={findId} onClick={ () => heart(product) } className='fa-regular fa-heart icon-heart'></i></button>
                      <div className="product_title col-9">
                        <a className='withoutStyle' href="#">{ name }</a>
                      </div>
                    </div>

                    <div className="product_img">
                      <a className='withoutStyle' href="#">
                        <img className='photo withoutStyle' src={ imgProduct } alt={ name } border="0" />
                      </a>
                    </div>
                    
                    <div className='prod_container'>
                        <div className='prod_container_secondary'>
                              <div className="prod_price">
                                  <span className="price">
                                      <b>{ price } €</b>
                                  </span>
                          </div>
                          <div className="prod_stock">
                              <span className="stock">
                                  <b>Stock</b>
                              </span>
                              <span>
                                  <b>{ stock }</b>
                              </span> 
                            
                          </div>
                        </div>
                        
                        <button onClick={ () => { saveValue(product) } } className="button-6 btn-buy">Buy<i className="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
          </div>
      </>
    )
}

export default PhotoCard