import './App.css'
import Header from '@/Components/Header'
import { Home, Dashboard, Login, Secret, Signup } from '@/Pages'



function App() {

  return (
    <>
      <Header />
      <p>React Auth</p>
      
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <Signup />
    </>
  )
}

export default App
