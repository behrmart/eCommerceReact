
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext' //context
import { RouteIndex } from './Routes/RouteIndex'
import Header from './Components/Header/Header'
import './App.css'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RouteIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
