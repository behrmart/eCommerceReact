import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RouteIndex } from './Routes/RouteIndex'
import Header from './Components/Header/Header'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RouteIndex />
      </BrowserRouter>
    </>
  )
}

export default App
