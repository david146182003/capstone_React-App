import { useState } from "react";
import { useEffect } from "react"

function MensPage(){
    const URL = "https://fakestoreapi.com/products"
    const [products, setProducts]= useState([])
    useEffect(()=>{
        async function getData(){
            const response = await fetch(URL);
            const data = await response.json();
            setProducts(data);
            
        }
    }, [])
    return(
        <div>
            MensPage
        </div>
    )
}
export default MensPage