import Registration from './pages/Registration'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav.jsx';
import Collections from './pages/Collections.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Product.jsx';
import { useContext } from 'react';
import { userDataContext } from './context/UserContext.jsx';

function App() {
let {userData}=useContext(userDataContext)
let location=useLocation()

  return (
    <>
   {/* {userData && <Nav/>} */}
   <Nav/>
    <Routes>

      <Route path="/signup" element={userData?(<Navigate to={location.state?.form || "/"}/>)
       : (<Login/>)}/>
      <Route path="/login"
       element={
       userData?(<Navigate to={location.state?.form || "/"}/>)
       : (<Registration/>)}/>

      <Route path="/" element={<Home />}/>

      <Route path="/home" element={<Navigate to="/" />} />

      <Route path="/collections" element={<Collections />}/>

      <Route path="/about" element={<About />}/>

      <Route path="/contact" element={<Contact />}/>

      <Route path="/product" element={<Product />}/>

    </Routes>
    </>
  )
}

export default App