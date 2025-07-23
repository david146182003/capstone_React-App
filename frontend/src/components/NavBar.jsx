import { Link } from "react-router-dom"
import { PiShoppingCartBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CartContext } from "../features/ContextProvider";
import { useContext } from "react";

function NavBar(){

    const {cart} = useContext(CartContext)

    return(
        <nav className="nav">
            <Link to='/'>
               <IoHomeOutline />
            </Link>
            <ul>
                <li>
                    <Link to="/signin">Log in</Link>
                </li>
                <li>
                    <Link to="/cart"><PiShoppingCartBold />{cart.length}</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar