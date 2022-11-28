import { useNavigate, useSearchParams } from "react-router-dom";
import PhotoCard from "../components/PhotoCard/PhotoCard"
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect } from "react";
import { MainContext } from "../context/Main/MainContext";

const Reels = () => {

    const navigate = useNavigate();
    const { wishes, products, addWish, deleteWish, saveValue, buy } = useContext(MainContext);
    const [filter, setFilter] = useSearchParams();
    const query = filter.get("query") ?? "";

    const handleInput = ({ target }) => {
        const { value } = target;
        setFilter({ query: value });
    }
    
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
            <div>
                <div className="searchbar-div mb-3">
                    <input className="searchbar" type="text" name="filter" value={query} autoComplete="off" placeholder="Search product" onChange={ handleInput } />
                </div>

                <div className="photo-container">
                    <div className="photo-row">
                        {
                            products && products.filter((card) => {
                                if (!query) return true;
                                else {
                                    const productName = card.name.toLowerCase();
                                    return productName.includes(query.toLowerCase());
                                }
                            })                            
                            .map((card) => {
                                    if (card.category === "Reel") {
                                        return (
                                            <PhotoCard
                                                key={uuidv4()}
                                                id={card.id}
                                                name={card.name}
                                                price={card.price}
                                                img={card.img}
                                                stock={card.stock}
                                                category={card.category}
                                                description={card.description}
                                                amount={card.amount}
                                                saveValue={saveValue}
                                                addWish={addWish}
                                                deleteWish={deleteWish}
                                            />
                                        )
                                    }
                                })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reels