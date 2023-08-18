import { Link } from "react-router-dom";
import "../Styles/NavBar.css"
import { useState } from "react"

function NavBar() {
    let [toggle, setToggle] = useState(false);
    function handleClick() {
        setToggle(!toggle);
    }

    return (
        <>
            <div className="nav">
                <div className={`logo ${toggle ? 'active' : ''}`}>
                    <Link to={'/Home'}>
                        <h2>Groceasy.com</h2>
                    </Link>
                </div>
                <div className={`lists ${toggle ? 'active' : ''}`} >
                    <ul>
                        <Link to={'/About'}>
                            <li>About Us</li>
                        </Link>
                        <Link to={'/Market'}>
                            <li>Market</li>
                        </Link>
                        <Link to={'/BillSplitter'}>
                            <li>Bill Splitter</li>
                        </Link>
                        <li>Special Offers</li>
                        <Link to={'/'}>
                        <li>Sign Up</li>
                        </Link>
                    </ul>
                </div>
                <div className="HamBurg-nav" onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </>
    )
}

export default NavBar;