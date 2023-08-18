import "../Styles/Second.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function Second() {
    return (
        <>
            <NavBar/>
            <div className="second-main">
                <div className="second-left">
                    <h1>Groceasy</h1>
                    <p>Welcome to Groceasy, your go-to destination for hassle-free grocery shopping. We are an online grocery ordering and delivery platform that connects you with the freshest produce, pantry essentials, and everyday household items.
                        At Groceasy, we understand that grocery shopping can be a time-consuming and sometimes frustrating experience. That's why we've made it our mission to simplify the process by bringing the store to your doorstep. With just a few clicks, you can easily browse our wide selection of products, add them to your cart, and have them delivered to your home or office.
                    </p>
                    <div className="second-btn second-btn-left">
                        <Link to={'/Market'}>
                            <button>Order Groceries</button>
                        </Link>
                    </div>
                </div>
                <div className="second-right">
                    <h1>Check out our new feature too!</h1>
                    <p>At Groceasy, we understand that splitting grocery bills can be a hassle, especially when you're shopping with friends or family. That's why we're excited to offer our convenient bill splitter feature, which makes dividing up grocery costs quick and easy.
                        With our bill splitter, you can easily split the cost of your groceries with anyone you're shopping with. Simply add items to your cart as usual, and then use our bill splitter tool to assign each item to a specific person. Our tool will calculate the total for each person, including tax and any applicable fees, so you don't have to worry about doing the math yourself.</p>
                    <p>(Bill splitter only works after purchasing some groceries)</p>
                    <div className="second-btn">
                        <Link to={'/BillSplitter'}>
                            <button>Try out bill splitter</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Second;