import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JeweleryPage() {

    const URL = "https://fakestoreapi.com/products"
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
            <h1><Link to='/'>Home</Link>  / <Link to='/'>All products</Link>  /Jewelery</h1>
            <ul>

                {(products.filter((product) => product.category == "jewelery")).map(product =>
                    <li key={product.id} className="product">
                        <Link to={`/product/${product.id}`}><img src={product.image} alt="" /></Link>
                        <h1>{product.title}</h1>
                        <h1>${product.price}</h1>
                    </li>
                )}

            </ul>
        </>
    )
}
export default JeweleryPage