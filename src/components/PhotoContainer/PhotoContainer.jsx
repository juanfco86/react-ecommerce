import PhotoCard from "../PhotoCard/PhotoCard"
import CardsInfo from "../../assets/db/db"
import './PhotoContainer.css'


const PhotoContainer = () => {
  return (
    <>
        <div className="photo-container">
            <div className="row photo-row">
                {CardsInfo && CardsInfo.map((card) => {
                  return (
                    <PhotoCard 
                      key={card.id}
                      name={card.name}
                      price={card.price}
                      img={card.img}
                      stock={card.stock}
                    />
                  );
                })}
            </div>
        </div>
    </>
  )
}

export default PhotoContainer