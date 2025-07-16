
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [data, setData]= useState()

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://localhost:8080')
        const data = response.json()
        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()

  }, [])

  return (
    <>
      {data}
    </>
  )
}

export default App
