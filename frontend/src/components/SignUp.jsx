import { useRef } from "react";


const SignUp = ({customers, setCustomers, BASE_URL})=>{
    
    
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const customer = {
            name: nameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value

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

    }
    


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" ref={nameRef} required/>
            <input type="text" placeholder="password" ref={passwordRef} required/>
            <input type="text" placeholder="email" ref={emailRef} required/>
            <input type="text" placeholder="phone" ref={phoneRef} />
            <input type="text" placeholder="address" ref={addressRef} required/>
            <button>Submit</button>
        </form>
    )
}

export default SignUp