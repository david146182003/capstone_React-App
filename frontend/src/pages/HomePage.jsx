import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Category from '../components/Category'
import Products from '../components/Products'

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
            <Category/>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    {products.map((product)=>(
                        <Products product = {product}/>
                    ))}
                </div>
            </div>
           
            <Footer/>
        </>
    )
}
export default HomePage