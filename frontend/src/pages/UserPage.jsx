import { useContext, useState, useRef } from "react"
import AuthContext from "../features/AuthProvider"
import { Link } from "react-router-dom"
import { CartContext } from "../features/ContextProvider"


const UserPage = () =>{
    const {cart, dispatch} = useContext(CartContext)
    const {auth, setAuth} = useContext(AuthContext)
    const [edit, setEdit] = useState(false)
    const URL = 'http://localhost:8080/customers'
    const inputRef = useRef();

    const handelClick = () =>{
        setAuth({})
        dispatch({type:"Empty"})
        alert(`See you next time ${auth.name}`)
    }
    const handleEdit = () =>{
        setEdit(true);
       
    }

    const handlePassword = async() =>{
        const response = await fetch(`${URL}/${auth._id}`,{
            method: "PATCH",
            body:JSON.stringify({password: inputRef.current.value}),
            headers: {
                'Content-type' : 'application/json'
            }
        })
        const updatedPassword = await response.json()
        console.log(updatedPassword)
        alert('Your password is updated successful!')
        setEdit(false)

    }
    return (
        <div className='user'>
                <h1><span className="span">Hello</span> {auth.name}</h1> 
            <div>
                <h1><span className="span">Email:</span> {auth.email}</h1>
                <h1><span className="span">Phone:</span> {auth.phone}</h1>

               {edit ? <h1><span className="span">Password:</span><input ref={inputRef} /><button onClick={handlePassword}>update</button></h1> : <h1><span className="span">Password:</span> {auth.password}<span><button onClick={handleEdit}>Edit</button></span></h1>} 

            </div>
            <Link to='/'><button onClick={handelClick}>Log out</button></Link>
        </div>
        
    )
}
export default UserPage