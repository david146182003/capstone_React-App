
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'



function App() {


  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
