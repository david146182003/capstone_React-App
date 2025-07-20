import { useParams } from "react-router-dom"

function ProductInfo(){
    const {id} = useParams()

    return(
        <div>
            ProductInfo - {id}
        </div>
    )
}

export default ProductInfo