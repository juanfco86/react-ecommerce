import PhotoCard from "../PhotoCard/PhotoCard"
import './PhotoContainer.css'



const PhotoContainer = ({ saveValue, products, helper }) => {
  
  return (
    <>
        <div className="photo-container">
            <div className="row photo-row">
                {
                  products && products.map((card, index) => {

                      return (

                          <PhotoCard 
                            key={index}
                            id={card.id}
                            name={card.name}
                            price={card.price}
                            img={card.img}
                            stock={card.stock}
                            saveValue={saveValue}
                          />

                      )
                    

                
                      
                  })
                
                }
            </div>
        </div>
    </>
  )
}

export default PhotoContainer