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
import Dashboard from './Pages/Dashboard'
import CreateBlog from './Pages/Blog/CreateBlog'
import EditBlog from './Pages/Blog/EditBlog'
import BlogDetails from './Pages/Blog/BlogDetails'
import PrivateRoute from './Components/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import ResetPassword from './Pages/Auth/ResetPassword'
import Blogs from './Pages/Blogs'


function App() {
  return (
    <>
      <AuthProvider>
        <NavBar/>
        <div className="min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Homepage/>}/>
            <Route path='/admin-login' element={<Login/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/aboutus' element={<AboutUsPage/>}/>
            <Route path='/contactus' element={<ContactUsPage/>}/>
            <Route path='/carrer' element={<CarrerPage/>}/>
            <Route path='/ourplatforms/gyaanadari' element={<Gyaanadari/>}/>
            <Route path='/ourplatforms/jkworks' element={<JKWorks/>}/>
            <Route path='/ourplatforms/ira-media-and-productions' element={<IRMediaAndProductions/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            
            
            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path="/blogs/create" element={<CreateBlog />} />
              <Route path="/blogs/:id/edit" element={<EditBlog />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
            </Route>
          </Routes>
        </div>
        <Footer/>
      </AuthProvider>
    </>
  )
}

export default App