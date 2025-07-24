import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../features/ContextProvider"
const Products = ({ product }) => {
    
    const { cart, dispatch } = useContext(CartContext)
    const handleClick = () =>{
        for(let i=0; i<cart.length; i++){
            if(cart[i]._id == product._id){
                return alert('item already exist in cart')
            }
        }
        dispatch({type: 'Add', payload: product})
    }
    return (
        <div className="col">
            <div className="card text-center h-100">
                <Link to={`/products/${product._id}`}><img src={product.image} className="card-img-top h-75" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-title">${product.price}</h5>
                    <button
                        className="btn btn-primary"
                        onClick={handleClick}
                    >
                        Add to Cart
                        
                    </button>

                    
                </div>
            </div>
        </div>
    )
}
export default Products