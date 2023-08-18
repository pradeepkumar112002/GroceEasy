import { useEffect, useState } from "react";
import "../Styles/CheckoutCard.css"
import { useContext } from "react";
import { groceryItems } from "./DataProvider";
const CheckoutCard = ({ item, setSum, sum }) => {
    let [nah, setNah, arr, setArr] = useContext(groceryItems);
    const [count, setCount] = useState(1);
    console.log("Price of the item" + sum);
    let it = item.price;
    const handleIncrement = () => {
        setCount(count + 1);
        setSum(sum + (it));
        console.log("Sum is incremented ");
    }
    const handleDecrement = () => {
        setCount(count - 1);
        setSum(sum - (it));
        console.log("Sum is decremented " + sum);
    }
    const displayPrice = (item.price);
    let temp = item.name;
    console.log("Hello there")
    console.log(temp);
    console.log(arr.indexOf(temp));
    useEffect(() => {
        if (count < 1) {
            const res = window.confirm("do you want to remove this item from the cart ?");
            if (res) {
                setArr(arr.filter((item) => item != temp))
            }
            else {
                setCount(count + 1);
                setSum(sum + (it));
            }
        }
    }, [count]);
    return (
        <>
            <div className="checkcard-main">
                <div className="checkcard-log">
                    <span class="material-symbols-outlined">
                        local_mall
                    </span>
                </div>
                <div className="checkcard-name">
                    <h3>{item.name}</h3>
                </div>
                <div className="checkcard-button">
                    <button onClick={handleDecrement}>-</button>
                    <h3>{count}</h3>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="checkard-price">
                    <h3>{displayPrice} </h3>
                </div>
            </div>
        </>
    )
}

export default CheckoutCard;