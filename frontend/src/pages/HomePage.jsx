import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

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
        <>
            <div className='category'>
                <Link to="/mens"><h1>Men's clothing</h1></Link>
                <Link to="/women"><h1>Women's clothing</h1></Link>
                <Link to="jewelery"><h1>Jewelery</h1></Link>
                <Link to="electronics"><h1>Electronics</h1></Link>
            </div>
            <div className='homeContainer'>
                
                <ul>
                    {products.map((product)=>
                    <li className='product' key={product.id}>
                    <Link to={`/product/${product.id}`}><img src={product.image}/></Link>
                        <h3>{product.title}</h3>
                        <h3>${product.price}</h3>
                    </li>)}
                </ul>
            </div>
            <Footer/>
        </>
    )
}
export default HomePage