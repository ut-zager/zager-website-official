import { Route, Routes } from 'react-router-dom'
// import './index.css'
import Homepage from './Pages/Homepage'
import NavBar from './Components/Navbar'
import OurProducts from './Components/Products'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUsPage'
import CarrerPage from './Pages/CarrerPage'
import Gyaanadari from './Pages/Gyaanadari'
import JKWorks from './Pages/JKWorks'
import IRMediaAndProductions from './Pages/IRMediaAndProductions'
import Login from './Pages/Auth/Login'
import { AuthProvider } from './context/AuthContext'
function App() {

  return (
    <>
    <AuthProvider>
    <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin-login' element={<Login/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
        <Route path='/carrer' element={<CarrerPage/>}/>
        <Route path='/ourplatforms/gyaanadari' element={<Gyaanadari/>}/>
        <Route path='/ourplatforms/jkworks' element={<JKWorks/>}/>
        <Route path='/ourplatforms/ira-media-and-productions' element={<IRMediaAndProductions/>}/>
      </Routes>
      <Footer/>
      </AuthProvider>
    </>
  )
}

export default App
