import { useContext, useState } from "react";
import { groceryItems } from "./DataProvider";
import CheckoutCard from "./CheckoutCard";
import grocerImage from "../Image/grocery-main.jpg"
import { checkoutPrice } from "./DataProvider";
import "../Styles/Checkout.css"
import BillSplitter from "./BillSplitter";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
export default function Checkout() {
    const [groce, setGroce, arr, setArr] = useContext(groceryItems);
    let [sum, setSum] = useContext(checkoutPrice);
    console.log("Total price");
    console.log(sum);
    const navigate = useNavigate();
    return (
        <>
        <NavBar/>
            <div className="checkout-main"> 
                <div className="checkout-left">
                    <h1>Checkout</h1>
                    {
                        groce.groceryData.map((item) => {
                            if (arr.includes(item.name)) {
                                return <CheckoutCard item={item} sum={sum} setSum={setSum} />
                            }
                            else {
                                return;
                            }
                        })
                    }
                    <h1>The total price is : {sum}</h1>
                    <div className="checkout-button">
                        <button onClick={() => {
                            const val = window.confirm("Do you want to split your bill ?")
                            if (val) {
                                window.alert("ok");
                                navigate("/BillSplitter");
                            }
                            else {
                                window.alert("thanks for buying");
                                navigate("/Last");
                            }
                        }}>Buy Item</button>
                    </div>
                </div>
            </div>
        </>
    )
}