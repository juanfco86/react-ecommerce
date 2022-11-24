import { useContext, useEffect } from "react";
import { MainContext } from "../../context/Main/MainContext";
import PhotoCard from "../PhotoCard/PhotoCard"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const WishList = () => {

    const { wishes, saveValue, addWish, deleteWish, buy, setBuy, decreaseValue, resetValue } = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('Wish', JSON.stringify(wishes));
    }, [wishes])
    

    useEffect(() => {
        localStorage.setItem("Result", JSON.stringify(buy));
    }, [buy])

    useEffect(() => {
        navigate('');
    }, [wishes])

    return (
        <>
            <h4 className="title_box">Wish list</h4>
            <hr />
            <div className="photo-container">
                <div className="row photo-row">
                    {
                        (wishes && wishes.length > 0 && wishes.map((card) => {
                            return (
                                <PhotoCard
                                    key={uuidv4()}
                                    id={card.id}
                                    name={card.name}
                                    price={card.price}
                                    img={card.img}
                                    stock={card.stock}
                                    amount={card.amount}
                                    category={card.category}
                                    description={card.description}
                                    buy={buy}
                                    setBuy={setBuy}
                                    saveValue={saveValue}
                                    decreaseValue={decreaseValue}
                                    resetValue={resetValue}
                                    addWish={addWish}
                                    deleteWish={deleteWish}
                                />
                            ) 
                        })) || (<h6 className='empty-cart d-flex align-items-center justify-content-center'>Empty wish list</h6>)
                    }  
                </div>
            </div>
        </>
    )
}

export default WishList