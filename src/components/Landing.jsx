import { useNavigate } from 'react-router-dom'
import '../App.css'

const Landing = () => {
  const navigate = useNavigate()
  // onClick function to navigate to signup page
  const goToSignup = () => {
    navigate('/signup')
  }
  // onClick function to navigate to login page
  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <div className='landing-page'>
      <div className='landing-content'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aliquid eiusunn</p>
        <div>

          {/* two buttons for signup and login */}
          <button onClick={goToSignup} className='btn btn-signup'>Create Account</button>
          <button onClick={goToLogin} className='btn btn-login'>Already Registered? Login</button>
        </div>
      </div>
    </div>
  )
}

export default Landing
