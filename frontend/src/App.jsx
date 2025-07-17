import Registration from './pages/Registration'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/signup" element={<Registration />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default App