import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";

function JeweleryPage() {

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
        <div className="url">
            <h1><Link to='/'>Home</Link>  / <Link to='/'>All products</Link>  /Jewelery</h1>
        </div>
            <div className="container mt-10">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {(products.filter((product) => product.category == "jewelery")).map(product =>
                        <Products key={product._id} product={product} />
                    )}
                </div>
            </div>
            
        </>
    )
}
export default JeweleryPage