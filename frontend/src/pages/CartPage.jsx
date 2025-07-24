import { useContext } from "react"
import { CartContext } from "../features/ContextProvider"
import CartProduct from "../components/CartProduct"

function CartPage(){
    
    const {cart} = useContext(CartContext)
    const totalItem = () =>{
        return cart.reduce((acc, cur) => acc + cur.quantity, 0)
    }
    const totalPrice = () =>{
        return cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(2)
    }

    const tax = () =>{
        const itemsPrice = totalPrice() * 0.08875;
        return itemsPrice.toFixed(2) 
    }
    const sum = () =>{
        const finalPrice = Number (totalPrice()) + Number(tax()) 
        if(totalPrice()>=100){
            return finalPrice.toFixed(2)
        }else{
            return (finalPrice + 10).toFixed(2)
        }
        
    }

    const shippingFee = () =>{
        let finalPrice = totalPrice()
        let shipping = 10;
        if(finalPrice >= 100){
            return shipping = 'free' 
        }
        return shipping
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-8">
                    {cart.map((product) =>(
                        <CartProduct key={product._id} product={product}></CartProduct>
                    ))}
                </div>
                <div className="col-4 ">
                    <div className="bg-secondary p-2 text-white">
                        {cart.length >0 ? 
                        <h4>Total Items: {totalItem()} <br/>Total Price: {totalPrice()}
                        <br/>Tax: {tax()} <br /> Shipping: {shippingFee()} <br />Sum: {sum()} <br />
                        <button className="btn btn-warning">Checkout</button></h4>  
                        : 
                        "cart is empty"}
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage