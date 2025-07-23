import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../features/ContextProvider"

const Products = ({ product }) => {

    const { dispatch } = useContext(CartContext)
    return (
        <div className="col">
            <div className="card text-center h-100">
                <Link to={`/products/${product._id}`}><img src={product.image} className="card-img-top h-75" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-title">${product.price}</h5>
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch({ type: 'Add', payload: product })}
                    >
                        Add to Cart
                        
                    </button>

                    
                </div>
            </div>
        </div>
    )
}
export default Products