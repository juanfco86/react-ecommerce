import PhotoCard from "../PhotoCard/PhotoCard"
import './PhotoContainer.css'



const PhotoContainer = ({ saveValue, products, addWish, deleteWish }) => {
  
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
                            addWish={addWish}
                            deleteWish={deleteWish}
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