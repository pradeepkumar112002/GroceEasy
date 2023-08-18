import { useState, useContext } from "react";
import { groceryItems } from "./DataProvider";
import { Link } from "react-router-dom";
import Market from "./Market";
import { checkoutPrice } from "./DataProvider";
import "../Styles/MarketFr.css"
import NavBar from "./NavBar";
const  MarketFr = () => {
    const [groce,setGroce] = useContext(groceryItems);
    const [sum,setSum] = useContext(checkoutPrice);
    return(
        <>  
        <NavBar/>
        <div className="markFr-main">
        <div className="markFr-whole">
        {
            
            groce.groceryData.map((item)=>{
                return <Market item={item} price = {sum} setPrice = {setSum} key={item.name}/>
            })
        }
        
        
        </div>
        <Link to={'/Checkout'}>
            <button className="button-54">Checkout</button>
            </Link>
        </div>
        </>
    )
}

export default MarketFr;