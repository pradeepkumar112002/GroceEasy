import { useContext, useEffect, useState } from "react"
import { checkoutPrice } from "./DataProvider"
import "../Styles/BillSplitterCard.css"
import { Button } from "@mui/material"
import TextField from "@mui/material"
const BillSplitterCard = ({ prop, percent, setPercent }) => {
    const temp = prop.prop
    let [price,setPrice] = useContext(checkoutPrice);
    let splitPrice = 0;
    const [money, setMoney] = useState(0);
    const [split, setSplit] = useState(0);
    const handleMoneyChange = (event) => {
        if (percent > 0 ) {
            setMoney(event.target.value);
            console.log(percent-money,"hi1",percent , "hello " , money , ":"  )
        }
        else {
            window.alert("Can't split anymore ")
        }
    }
    const handleMoneySubmit = (event) => {
        if (percent >= 0) {
            splitPrice = (money * price) / 100;
            setSplit(splitPrice);
            setPercent(percent - money);
        }
        else {
            window.alert("Can't split anymore")
        }
    }
    console.log("remaing percent = ", percent);
    return (
        <>
            <div className="bill-card-main">
                <div className="bill-card-inp">
                    <h4>Enter percentage of splitting</h4>
                    <input onChange={handleMoneyChange}></input>
                    <Button variant="outlined" onClick={handleMoneySubmit}>Submit</Button>
                </div>
                <h4>Money to be returned is {split}</h4>
            </div>

        </>
    )
}

export default BillSplitterCard