import "../Styles/Market.css"
import { useEffect, useMemo, useState, useContext } from "react"
import { groceryItems } from "./DataProvider"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const Market = ({ item , price , setPrice }) => {
    const [nah, setNah, arr, setArr] = useContext(groceryItems);
    const handleAddToCart = () => {
        toast("added to cart");
        const item1 = item.name;
        if (!arr.includes(item1)) {
            setPrice(price+ item.price);
            setArr((prevCartItems) => [...prevCartItems, item1]);
        }
    }
    return (<>
    
        <div className="mark-main">
            <div className="mark-head">
                <h3>{item.name}</h3>
            </div>
            <div className="mark-image">
                <img src={item.image} width={"100px"} height={"100px"}></img>
            </div>
            <div className="mark-price">
                <h3>{item.price}</h3>
            </div>
            <div className="mark-adding">
                    <button onClick={handleAddToCart}>Add To Cart</button>
            </div>

        </div>
        </>
    );

}

export default Market;