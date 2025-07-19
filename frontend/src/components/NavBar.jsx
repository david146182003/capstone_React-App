function NavBar(){
    return(
        <nav className="nav">
            <a href="/">
                Home
            </a>
            <ul>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/signin">Log in</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar