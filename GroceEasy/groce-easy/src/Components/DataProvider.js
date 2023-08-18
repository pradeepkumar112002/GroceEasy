import { createContext, useState } from "react"
import lays from "../Image/lays.png"
import tomato from "../Image/tomato.png"
import onion from "../Image/onion.png"
import wheat from "../Image/wheat.png"
import eggs from "../Image/Eggs.png"
import oil from "../Image/oil.png"
import rice from "../Image/rice.png"
import milk from "../Image/milk.png"
import MarketFr from "./MarketFr"
import Checkout from "./Checkout"
import Market from "./Market"
import { Routes, Route } from "react-router-dom"
import BillSplitter from "./BillSplitter"
export const groceryItems = createContext();
const groceryData =
    [
        {
            "id": 1,
            "name": "Lays",
            "price": 10,
            "image": lays,
            "count": 0
        },
        {
            "id": 2,
            "name": "Tomato",
            "price": 20,
            "image": tomato,
            "count": 0
        },
        {
            "id": 3,
            "name": "Onion",
            "price": 30,
            "image": onion,
            "count": 0
        }
        ,
        {
            "id": 4,
            "name": "Wheat",
            "price": 50,
            "image": wheat,
            "count": 0
        }
        ,
        {
            "id": 5,
            "name": "Milk",
            "price": 25,
            "image": milk,
            "count": 0
        }
        ,
        {
            "id": 6,
            "name": "Eggs",
            "price": 60,
            "image": eggs,
            "count": 0
        }
        ,
        {
            "id": 7,
            "name": "Rice",
            "price": 50,
            "image": rice,
            "count": 0
        }
        ,
        {
            "id": 8,
            "name": "Oil",
            "price": 75,
            "image": oil,
            "count": 0
        }
    ]

export const checkoutPrice = createContext();
const DataProvider = ({children}) => {
    const [groce, setGroce] = useState({ groceryData });
    let [arr, setArr] = useState([]);
    let [ct,setCt] = useState({});
    console.log("rendering sum again");
    let [sum, setSum] = useState(0);
    console.log(sum);
    console.log(arr);
    return (
        <>
            <groceryItems.Provider value={[groce, setGroce, arr, setArr]}>
                <checkoutPrice.Provider value={[sum, setSum]}>
                    {children}
                </checkoutPrice.Provider>
            </groceryItems.Provider>
        </>
    )
}

export default DataProvider