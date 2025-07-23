import { useContext } from "react"
import AuthContext from "../features/AuthProvider"
import { Link } from "react-router-dom"

const UserPage = () =>{
    const {auth, setAuth} = useContext(AuthContext)

    const handelClick = () =>{
        setAuth({})
        alert(`See you next time ${auth.name}`)

        
    }
    return (
        <div className='user'>
                 <h1><span className="span">Name:</span> {auth.name}</h1> 
                <h1><span className="span">Email:</span> {auth.email}</h1>
                <h1><span className="span">Phone:</span> {auth.phone}</h1>
                <h1><span className="span">Password:</span> {auth.password}</h1>
                <Link to='/'><button onClick={handelClick}>Log out</button></Link>
        </div>
        
    )
}
export default UserPage