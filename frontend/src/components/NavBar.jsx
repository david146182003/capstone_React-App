import { Link } from "react-router-dom"
import { PiShoppingCartBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CartContext } from "../features/ContextProvider";
import { useContext } from "react";
import AuthContext from "../features/AuthProvider";
import { VscAccount } from "react-icons/vsc";

function NavBar(){
    const { auth, setAuth } = useContext(AuthContext)
    const {cart} = useContext(CartContext)
    console.log(auth)
    return(
        <nav className="nav">
            <Link to='/'>
               <IoHomeOutline />
            </Link>
            <ul>
                <li>
                    {auth.name ? <Link to="/"><VscAccount/> {auth.name} </Link>: <Link to="/signin">Log in</Link> }
                </li>
                <li>
                    <Link to="/cart"><PiShoppingCartBold />{cart.length}</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar