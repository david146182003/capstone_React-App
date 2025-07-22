import { createContext, useReducer } from "react";


const CartContext = createContext()

const ContextProvider = () =>{

    const [cart, dispatch] = useReducer(, [])

    return(
        <div>
        
        </div>
    )
}
export default ContextProvider