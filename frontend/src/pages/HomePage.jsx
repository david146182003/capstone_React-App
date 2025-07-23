import { useState, useEffect } from 'react'
import Category from '../components/Category'
import Products from '../components/Products'

function HomePage(){

    const [products, setProducts] = useState([])
    const BASE_URL = 'http://localhost:8080'
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch(`${BASE_URL}/products`);
            const data = await response.json();
           
            setProducts(data)
        }
        getData()
    }, [])
    


    return (
        <>  <div className='category'>
                <Category/>
            </div>
            <div className="container mt-10">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {products.map((product)=>(
                        <Products key={product._id} product= {product}/>
                    ))}
                </div>
            </div>
           
          
        </>
    )
}
export default HomePage