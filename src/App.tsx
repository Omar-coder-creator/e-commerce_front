
import './App.css'
import Login from './pages/Login'
import { Routes, Route } from 'react-router'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
function App() {


  return (
    <div id='app'>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
