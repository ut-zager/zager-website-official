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
function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
        <Route path='/carrer' element={<CarrerPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
