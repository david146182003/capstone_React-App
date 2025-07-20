import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import { useState, useEffect } from 'react'

function HomePage(){

    const [products, setProducts] = useState([])
    console.log(products)
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setProducts(data)
        }
        getData()
    }, [])
    


    return (
        <div className='homeContainer'>
            <h1>Fashion store</h1>
            <ul>
                {products.map((product)=>
                <li className='product'>
                   <Link to={`/product/${product.id}`}><img src={product.image}/></Link>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                </li>)}
            </ul>
        </div>
    )
}
export default HomePage