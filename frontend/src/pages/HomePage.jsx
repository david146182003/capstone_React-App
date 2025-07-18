import SignUp from './components/SignUp'
import { useState, useEffect } from 'react'

function HomePage(){

const BASE_URL = 'http://localhost:8080'
  const [customers, setCustomers]= useState([])
  

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

 

  return (
    <>
    <h1>Customers</h1>
      <SignUp 
        customers={customers} setCustomers={setCustomers} BASE_URL={BASE_URL}
      />
      <ul>
        {customers.map((customer)=>
        <li key={customer._id}>{customer.name}</li>)}
      </ul>
     
    </>
  )
}
export default HomePage