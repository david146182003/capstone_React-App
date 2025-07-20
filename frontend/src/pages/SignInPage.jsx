import { Link } from "react-router-dom"

import { useRef, useState, useEffect } from "react"


function SignInPage(){

    const BASE_URL = 'http://localhost:8080';
    const [customers, setCustomers]= useState([]);
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(BASE_URL + '/customers');
                const data = await response.json();
                setCustomers(data)
            }catch(e){
                console.log(e)
            }
        }
        getData()
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="signin">
                <h1>Log in</h1>
                <input type="email" placeholder="email" required ref={emailRef}/>
                <input type="password" placeholder="password" required ref={passwordRef}/>
                <button>Log in</button>
                <p>Don't have an account?</p>
                <Link to="/signup">Sign up</Link>

            </form>
        </>
    )
}

export default SignInPage