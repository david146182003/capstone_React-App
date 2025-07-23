import { useState } from "react";
import { useEffect } from "react"
import { Link} from "react-router-dom";
import Products from "../components/Products";



function MensPage() {
    
    const URL = "http://localhost:8080/products"
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const data = await response.json();
            setProducts(data);
        }
        getData()
    }, [])

    console.log(products)
    return (
        <>
            <h1><Link to='/'>Home</Link>  / <Link to='/'>All products</Link>  /Men's clothing</h1>
            
            <div className="container mt-10">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {(products.filter((product) => product.category == "men's clothing")).map(product =>
                    <Products key={product._id} product={product}/>
                    )}
                </div>
            </div>
            
        </>
    )
}
export default MensPage