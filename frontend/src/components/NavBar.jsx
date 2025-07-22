import { Link } from "react-router-dom"
import { PiShoppingCartBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
function NavBar(){
    return(
        <nav className="nav">
            <a href="/">
               <IoHomeOutline />
            </a>
            <ul>
                <li>
                    <Link to="/signin">Log in</Link>
                </li>
                <li>
                    <Link to="/cart"><PiShoppingCartBold /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar