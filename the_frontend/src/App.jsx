import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './scenes/Home/Home'
import Resume from './scenes/Resume/Resume'
import Register from './scenes/Register_Login/Register'
import Not_Found from './scenes/Register_Login/Not_Found'
import Login from './scenes/Register_Login/Login'
import ProtectedRoute from './scenes/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' 
      element={
      // <ProtectedRoute>
        <Home />
      // </ProtectedRoute>
        } />
      <Route path='/login' element={<Login />} />
      <Route path='/resume' element={<Register />} />
      <Route path='*' element={<Not_Found />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
