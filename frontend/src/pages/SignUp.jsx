import { useRef, useEffect, useState} from "react";
import { Link } from "react-router-dom";



const SignUp = ()=>{
    
    const BASE_URL = 'http://localhost:8080';
    const [customers, setCustomers]= useState([]);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        async function getData() {
          try {
            const response = await fetch(BASE_URL + '/customers')
            const data = await response.json()
            setCustomers(data)
            console.log('data:', data)
        
            
          } catch (e) {
            console.log(e)
          }
        }
        getData()
    
      }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const customer = {
            name: nameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value

        }
        //check if email has been used
        for(let cus of customers){
            if(cus.email === customer.email){
                return alert('email alreay been used')
            }
        }
        const response = await fetch(BASE_URL + '/customers', {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-type' : 'application/json'
            }
        });
        const newCustomer = await response.json()
        setCustomers([...customers, newCustomer])

        
        nameRef.current.value = '';
        passwordRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        addressRef.current.value = '';
        alert(`Sign up successful! Thank you ${customer.name}!`)
    }
    


    return(
        <>

            <form onSubmit={handleSubmit} className="signup">
                <h1>SignUp</h1>
                <input type="text" placeholder="name" ref={nameRef} required/>
                <input type="password" placeholder="password" ref={passwordRef} required/>
                <input type="email" placeholder="email" ref={emailRef} required/>
                <input type="text" placeholder="phone" ref={phoneRef} />
                <input type="text" placeholder="address" ref={addressRef} required/>
                <button>Sign Up</button>

                <p>Already have an account?</p>
                <Link to="/signin">Log in</Link>
            </form>



        </>
    )
}

export default SignUp