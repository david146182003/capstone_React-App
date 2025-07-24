import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../features/ContextProvider";



function ProductInfo(){

    const {cart, dispatch} = useContext(CartContext)
    const [info, setInfo] = useState({})
    
    

    const {id} = useParams();
    const URL = "http://localhost:8080/products"
    
    
    useEffect(()=>{
        async function getProductById(){
            const response = await fetch(`${URL}/${id}`);
            const data = await response.json();
            setInfo(data)
        }
        getProductById()
    }, [])

    const handelClick = () =>{
        for(let i=0; i<cart.length; i++){
            if(cart[i]._id == info._id){
                return alert('item already exist in cart')
            }
        }
        dispatch({type: 'Add', payload:info})
    }
    
    return(
        <>
        <div className="productId">
            <div>
                <img src={info.image} alt="" />
            </div>
            <div className="productInfo">
                <h1>{info.title}</h1>
                <h1>${info.price}</h1>
                
                <button onClick={handelClick}>Add to Bag</button>
            </div>
        </div>
        <div>
            <h1>About this product:</h1>
            
            
            <h1>{info.description}</h1>
        </div>
        </>
    )
}

export default ProductInfo