import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductInfo(){
    const [info, setInfo] = useState({})
    const [count, setCount] = useState(1)
    const [cart, setCart] = useState({})

    const {id} = useParams();
    const URL = "http://localhost:8080/products"
    
    
    const handleDecrease = ()=>{
        if(count>0){
            setCount(prevCount => prevCount -1);
        }
        
    }
    const handleIncrease = ()=>{
        setCount(prevCount => prevCount +1);
    }

    const handleBag = () =>{
        
    }

    useEffect(()=>{
        async function getProductById(){
            const response = await fetch(`${URL}/${id}`);
            const data = await response.json();
            setInfo(data)
        }
        getProductById()
    }, [])
    
    return(
        <>
        <div className="productId">
            <div>
                <img src={info.image} alt="" />
            </div>
            <div className="productInfo">
                <h1>{info.title}</h1>
                <h1>${info.price}</h1>
                <h1>Quantity: <button onClick={handleDecrease}>-</button> {count}<button onClick={handleIncrease}>+</button></h1>
                <button onClick={handleBag}>Add to Bag</button>
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