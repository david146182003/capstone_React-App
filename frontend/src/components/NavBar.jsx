import { Link } from "react-router-dom"
function NavBar(){
    return(
        <nav className="nav">
            <a href="/">
                Home
            </a>
            <ul>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/signin">Log in</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar