import { useContext } from "react"
import { CartContext } from "../features/ContextProvider"

const CartProduct = ({product}) =>{

    const {cart, dispatch} = useContext(CartContext)

    const Increase = (id) =>{
        const Index = cart.findIndex(p => p._id ===id)
        if(cart[Index].quantity < 10) {
            dispatch({type: "Increase", payload: id})
        }
    }
    const Decrease = (id) =>{
        const Index = cart.findIndex(p => p._id ===id)
        if(cart[Index].quantity > 1) {
            dispatch({type: "Decrease", payload: id})
        }
    }
   

    return(
        <div className="d-flex border mb-3">
            <img src={product.image} className="w-25 h-25" alt="" />
            <div className="detail ms-4">
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <div className="buttons">
                    <button onClick={()=>{Decrease(product._id)}}><b>-</b></button>
                    <button>{product.quantity}</button>
                    <button onClick={()=> {Increase(product._id)}}><b>+</b></button>
                </div>
                <button onClick={()=>{dispatch({type: "Delete", payload: product._id})}} className="btn  btn-sm">Delete</button>
            </div>
        </div>
    )
}
export default CartProduct