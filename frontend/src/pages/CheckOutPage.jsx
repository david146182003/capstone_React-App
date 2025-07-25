import SignInPage from "./SignInPage"
import AuthContext from "../features/AuthProvider"
import { useContext } from "react"
import CheckOut from "../components/CheckOut"
import { Link } from "react-router-dom"

const CheckOutPage = () => {
    const {auth} = useContext(AuthContext)
    return(
        <div className="container text-center">
            <div className="row align-items-center">
                {auth._id ? <CheckOut/> 
                : <><div className="col">
                    <Link to='/checkout-guest'><button>Checkout as a guest</button></Link>
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