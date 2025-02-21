import { Route, Routes } from 'react-router-dom'
// import './index.css'
import Homepage from './Pages/Homepage'
import NavBar from './Components/Navbar'
import OurProducts from './Components/Products'
function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <OurProducts/>
    </>
  )
}

export default App
