import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import * as photos from '../../assets/img'
import './PhotoCard.css'
import toast from 'react-hot-toast';
import Accordion from 'react-bootstrap/Accordion';

const PhotoCard = ( { id, name, price, stock, saveValue, img, category, description, amount, addWish, deleteWish } ) => {
  
  const product = {
    id: id,
    name: name,
    price: price,
    stock: stock,
    img: img,
    amount: amount,
    category: category,
    description: description,
  };

  const [wishValidate, setWishValidate] = useState(JSON.parse(localStorage.getItem('Wish')));
  const inputRef = useRef(null);
  const imgProduct = photos[`photo${img}`];

  useEffect(() => {
    heartStart();
  }, [])  

  const heartStart = () => {
    wishValidate?.map((e) => {
      const inputHelper = inputRef.current;
      if(e.id === product.id) {
        inputHelper.classList.add('fa-solid')
      }
    })
  }
  
  const heart = (product) => {
      const inputHelper = inputRef.current;
      inputHelper.classList.toggle('fa-solid');
    
      if (inputHelper.classList.contains('fa-solid')) {
          toast.success('Added to the wishlist successfully! 😊')
          addWish(product);
        } else {
          toast.error('Remove to the wishlist successfully! 😒')
          deleteWish(product);
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
                    <button onClick={ () => heart(product) } className='col-2 d-flex flex-column justify-content-center align-items-center btn btn-outline btn-wish'><i ref={ inputRef } className='fa-regular fa-heart icon-heart-product'></i></button>
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
                <div className='mb-2 mt-2'>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{ category } description</Accordion.Header>
                            <Accordion.Body>
                                { description }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
          </div>
      </>
    )
}

export default PhotoCard