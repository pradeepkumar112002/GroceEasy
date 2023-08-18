import GroceryImg from "../Image/grocery1.jpg"
import "../Styles/First.css"
import GroceryMob from "../Image/grocery2.jpg";
import NavBar from "./NavBar";
function First(){
    return(
        <>
        <NavBar />
        <div className="main-first">
            <div className="imag">
                <div className="imag-pc">
                    <div className="imag-dis">
                        <h1>Hello</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        
                    </div>
                </div>
                <div className="imag-mob">
                    <img src={GroceryMob}></img>
                </div>
                <div className="imag-mob-dis">
                <h1>Hello</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default First;