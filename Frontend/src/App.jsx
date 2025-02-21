import { Route, Routes } from 'react-router-dom'
// import './index.css'
import Homepage from './Pages/Homepage'
import NavBar from './Components/Navbar'
import OurProducts from './Components/Products'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
