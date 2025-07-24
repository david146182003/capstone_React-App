import { useState, useRef, useEffect} from "react"
import { CartContext } from "../features/ContextProvider"
import { useContext } from "react"

const Checkout = () => {
    const{cart, dispatch} = useContext(CartContext)
    const emailRef = useRef()
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()
    const paymentRef = useRef()
    const URL = 'http://localhost:8080/shipping'
    const [shipping, setShipping] = useState([])

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(URL)
                const shipping = await response.json()
                setShipping(shipping)
            }catch(e){
                console.log(e)
            }
        }
        getData()
    }, [])

    const handleShipping = async (e) =>{
        e.preventDefault();
        
        const shippingInfo = {
            firstname: firstNameRef.current.value,
            lastname: lastNameRef.current.value,
            phone: Number(phoneRef.current.value),
            address: addressRef.current.value,
            city: cityRef.current.value,
            zip: Number(zipRef.current.value),
            email: emailRef.current.value,
            payment: paymentRef.current.value
        }
        console.log(shippingInfo)
        const response = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(shippingInfo),
            headers: {
                'Content-type' : 'application/json'
            }
        })
        const newShipping = await response.json()
        setShipping([...shipping, newShipping])

        firstNameRef.current.value = ''
        lastNameRef.current.value = ''
        phoneRef.current.value =''
        addressRef.current.value =''
        cityRef.current.value = ''
        zipRef.current.value = ''
        emailRef.current.value = ''
        alert('Order received! Thank you for shopping with us')
        dispatch({type: "Empty"}) //empty shopping cart

    }

    

    return (
        <form className="row g-3" onSubmit={handleShipping}>
            <div className="col-md-6">
                <label  className="form-label">LastName</label>
                <input type="text" className="form-control" ref={lastNameRef} required />
            </div>
            <div className="col-md-6">
                <label className="form-label">FirstName</label>
                <input type="text" className="form-control" ref={firstNameRef} required/>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Phone </label>
                <input type="number" className="form-control" ref={phoneRef}/>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" ref={emailRef} required/>
            </div>
            
            <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" ref={addressRef} required placeholder="1234 Main St"/>
            </div>
            
            <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" ref={cityRef} required/>
            </div>
            <div className="col-md-4">
                <label className="form-label">State</label>
                <select id="inputState" className="form-select" >
                    <option>Choose...</option>
                    <option>NY</option>
                    <option>NJ</option>
                    <option>CT</option>
                    <option>AZ</option>
                    <option>TX</option>
                    <option>CA</option>
                </select>
            </div>
            <div className="col-md-2">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" ref={zipRef}/>
            </div>
            <div className="col-12">
                <label className="form-label">Payment: Card</label>
                <input type="text" className="form-control" ref={paymentRef}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">confirm</button>
            </div>
        </form>
    )
}
export default Checkout