import { Link } from "react-router-dom"

const Category = () => {
    return (
        <div className='category'>
            <Link to="/mens"><h1>Men's clothing</h1></Link>
            <Link to="/women"><h1>Women's clothing</h1></Link>
            <Link to="jewelery"><h1>Jewelery</h1></Link>
            <Link to="electronics"><h1>Electronics</h1></Link>
        </div>
    )
}
export default Category