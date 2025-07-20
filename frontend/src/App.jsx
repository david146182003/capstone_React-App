
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import NavBar from './components/NavBar'
import SignInPage from './pages/SignInPage'
import ProductInfo from './pages/ProductInfo'



function App() {


  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/product/:id' element={<ProductInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App
