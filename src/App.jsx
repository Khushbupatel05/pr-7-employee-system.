import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import Employees from './pages/Employees'
import AddEmployee from './pages/AddEmployee'
import ProtectedRoute from './components/ProtectedRoute'
import EditEmployee from './pages/EditEmployee'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let status = JSON.parse(localStorage.getItem("isLoggedin") || false);
    setIsLoggedIn(status);
  }, [])
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/employees' element={<ProtectedRoute isLoggedIn={isLoggedIn} component={<Employees />}/>} />
          <Route path='/add-employee' element={<ProtectedRoute  isLoggedIn={isLoggedIn} component={<AddEmployee />}/>} />
          <Route path='/edit-employee/:id' element={<EditEmployee />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App