import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";

function ElectronicsPage() {

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

    return (

        <>
            <h1><Link to='/'>Home</Link>  / <Link to='/'>All products</Link>  /Electronics</h1>
            <div className="container mt-10">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {(products.filter((product) => product.category == "electronics")).map(product =>
                        <Products key={product._id} product={product} />
                    )}
                </div>
            </div>
        </>
    )
}
export default ElectronicsPage