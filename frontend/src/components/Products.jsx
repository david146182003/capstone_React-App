import { Link } from "react-router-dom"

const Products = ({product}) => {
    return (
        <div className="card">
            <Link to={`/product/${product.id}`}><img src={product.image} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-title">${product.price}</h5>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}
export default Products