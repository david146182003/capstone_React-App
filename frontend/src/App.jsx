
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './components/SignUp'



function App() {


  
  return (
    <>
      <HomePage />
      <Routes>
        <Route path='/' element={HomePage} />
        <Route path='/signup' element={SignUp} />
      </Routes>
    </>
  )
}

export default App
