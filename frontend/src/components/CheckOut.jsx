import { useState, useRef, useEffect } from "react"
import { CartContext } from "../features/ContextProvider"
import { useContext } from "react"
import { PiLetterCircleHBold } from "react-icons/pi"


const CheckOut = () => {
    const { cart, dispatch } = useContext(CartContext)
    const emailRef = useRef()
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()
    const paymentRef = useRef()
    const BASE_URL = 'http://localhost:8080'
    const [shipping, setShipping] = useState([])
    const [order, setOrder] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${BASE_URL}/shipping`)
                const shipping = await response.json()
                setShipping(shipping)
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${BASE_URL}/order`)
                const order = await response.json()
                setOrder(order)
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    }, [])



    const totalItem = () => {
        return cart.reduce((acc, cur) => acc + cur.quantity, 0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(2)
    }

    const tax = () => {
        const itemsPrice = totalPrice() * 0.08875;
        return itemsPrice.toFixed(2)
    }
    const sum = () => {
        const finalPrice = Number(totalPrice()) + Number(tax())
        if (totalPrice() >= 100) {
            return finalPrice.toFixed(2)
        } else {
            return (finalPrice + 10).toFixed(2)
        }
    }


    const shippingFee = () => {
        let finalPrice = totalPrice()
        let shipping = 10;
        if(cart.length ===0){
            return 0
        }
        if (finalPrice >= 100) {
            return shipping = 'free'
        }
        return shipping
    }


    const handleOrder = async (e) => {
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
        const response = await fetch(`${BASE_URL}/shipping`, {
            method: 'POST',
            body: JSON.stringify(shippingInfo),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const newShipping = await response.json()
        setShipping([...shipping, newShipping])

        firstNameRef.current.value = ''
        lastNameRef.current.value = ''
        phoneRef.current.value = ''
        addressRef.current.value = ''
        cityRef.current.value = ''
        zipRef.current.value = ''
        emailRef.current.value = ''
        paymentRef.current.value = ''

        //get order list
        const itemList = [];
        for(let item of cart){
            let itemInfo = {
                id: item._id,
                title: item.title,
                quantity: item.quantity
            }
            itemList.push(itemInfo)
        }
        console.log(itemList)

        const orderList = {
            items: totalItem(),
            price: Number(totalPrice()),
            tax: Number(tax()),
            shipping: shippingFee(),
            total: Number(sum()),
            order: itemList
        }
        console.log(orderList)

        const response2 = await fetch(`${BASE_URL}/order`,{
            method: 'POST',
            body: JSON.stringify(orderList),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const newOrder = await response2.json()
        setOrder([...order, newOrder])
        
        

        alert('Order received! Thank you for shopping with us')
        dispatch({ type: "Empty" }) //empty shopping cart

    }


    return (
        <section className="pay">
            <h1>Delivery information</h1>
            <section>
                <form className="row g-3" onSubmit={handleOrder}>
                    <div className="col-md-6">
                        <label className="form-label">LastName</label>
                        <input type="text" className="form-control" ref={lastNameRef} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">FirstName</label>
                        <input type="text" className="form-control" ref={firstNameRef} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone </label>
                        <input type="number" className="form-control" ref={phoneRef} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" ref={emailRef} required />
                    </div>

                    <div className="col-12">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" ref={addressRef} required placeholder="1234 Main St" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" ref={cityRef} required />
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
                        <input type="number" className="form-control" ref={zipRef} required min={10000} max={99999}/>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Payment: Card</label>
                        <input className="form-control" ref={paymentRef} required minLength={15} maxLength={16} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">confirm</button>
                    </div>
                </form>
            </section>
            <section className="sum" >
                <div>
                    <h4 className="sum">Order summary</h4>
                    <p>Total items: {totalItem()} </p>
                    <p>Items: ${totalPrice()}</p>
                    <p>NY tax: ${tax()}</p>
                    <p>Shipping: {shippingFee()===10 ? '$' : ''}{shippingFee()}</p>
                    <p>Total: ${sum()}</p>
                </div>
                {cart.map((product) => (
                    <div className="" key={product._id}>
                        <img src={product.image} />
                        <p>Quantity: {product.quantity}</p>
                        <p>$: {product.price}</p>
                    </div>

                ))}
            </section>
        </section>
    )
}
export default CheckOut