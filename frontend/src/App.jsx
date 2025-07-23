
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import NavBar from './components/NavBar'
import SignInPage from './pages/SignInPage'
import ProductInfo from './pages/ProductInfo'
import MensPage from './pages/MensPage'
import WomenPage from './pages/WomenPage'
import JeweleryPage from './pages/JeweleryPage'
import ElectronicsPage from './pages/ElectronicsPage'
import CartPage from './pages/CartPage'
import UserPage from './pages/UserPage'



function App() {


  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/products/:id' element={<ProductInfo/>}></Route>
        <Route path='/mens' element={<MensPage/>}></Route>
        <Route path='/women' element={<WomenPage/>}></Route>
        <Route path='/jewelery' element={<JeweleryPage/>}></Route>
        <Route path='/electronics' element={<ElectronicsPage/>}></Route>
        <Route path='/user' element={<UserPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
