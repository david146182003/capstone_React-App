
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './features/ContextProvider.jsx'
import { AuthProvider } from './features/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(

  
    <ContextProvider>
      <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthProvider>
    </ContextProvider>
  ,
)
