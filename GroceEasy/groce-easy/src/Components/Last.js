import "../Styles/Last.css"
import { groceryItems } from "./DataProvider"
import { useContext } from "react"
export default function Last() {
    let [groce,setGroce,nah,setNah] = useContext(groceryItems);
    return (
        <>
          {
            groce.groceryData.map((item)=>{
                return <h3>{item.name} {item.count}</h3>
            })
          }  
        </>
    )
}