import { useContext, useState } from "react";
import BillSplitterCard from "./BillSplitterCard";
import "../Styles/BillSplitter.css"
import { checkoutPrice } from "./DataProvider";
import NavBar from "./NavBar";

// how many people wannna split bill and how many persentage each wanna share .... or press button to share equally
const BillSplitter = (sum) => {
    let [price,setPrice] = useContext(checkoutPrice);
    let [max_percent,setPercent] = useState(100);
    let [person, setPerson] = useState(1);
    console.log("the total price is "+price);
    const handleDecrement = () => {
        if (person >0) {
            setPerson(person - 1);
        }
    }
    const handleIncrement = () => {
        //persone should be less than the bill amount
        setPerson(person + 1);
    }
    let arr = [];
    arr.length = person;
    let count = 0;
    arr.fill("hello") 
    return (
        <>
        <NavBar/>
        <div className="bill-main">
            <div className="bill-left">
            <h4>How many people are splitting bills ?</h4>
            <div className="bill-buttons">
            <button onClick={handleDecrement}>-</button>
            <h3>{person}</h3>
            <button onClick={handleIncrement}>+</button>
            </div>
            </div>
            <div className="bill-wrap-right">
            <div className="bill-right">
                {
                    arr.map((index)=>{
                        count++;
                        
                        return <BillSplitterCard prop={count}  percent={max_percent} setPercent={setPercent}/>
                    })
                }
            </div>
            </div>
        </div>
        </>
    )

}

export default BillSplitter;