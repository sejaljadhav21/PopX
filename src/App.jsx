import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Landing from './components/Landing'
import Signup from './components/Signup'
import Profile from './components/Profile'
import './App.css'

function App() {
  return (
    <div className='app-container'> 
    <div className='app-wrapper'>
      {/* Routes for different pages */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App
