import SignInPage from "./SignInPage"
import AuthContext from "../features/AuthProvider"
import { useContext } from "react"
import Checkout from "../components/CheckOut"

const CheckOutPage = () => {
    const {auth} = useContext(AuthContext)
    return(
        <div className="container text-center">
            <div className="row align-items-center">
                {auth._id ? <Checkout /> 
                : <><div className="col">
                    <button>Checkout as a guest</button>
                </div>
                <div className="col">
                    <SignInPage/>
                </div>
                </>}
                
            </div>
        </div>
    )
}
export default CheckOutPage