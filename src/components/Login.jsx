import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // useState hooks to manage email and password input states
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  // useNavigate hook from React Router for navigation
  const navigate = useNavigate() 

  // handler for form submission
  const goToLogin = (e) => {
    // prevent form from submitting
    e.preventDefault() 

    // if both fields are filled, navigate to the /profile page
    if (email && password) {
      navigate('/profile') 
    }
  } 
  // check if both email and password fields are filled
  const isFormValid = email && password 

  return (
    <div className='login-container'>
      <h1>Sign in to your PopX account</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aliquid eiusunn</p>

      {/* login form */}
      <form onSubmit={goToLogin}>
        {/* email input field */}
        <div className= 'input '>
          <label htmlFor= 'email '>Email Address</label>
          {/* update state using onChange hook on input change */}
          <input type= 'email ' id='email' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* password input field */}
        <div className= 'input '>
          <label htmlFor= 'password '>Password</label>
          <input type= 'password ' id='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* submit button: enabled only if both fields are filled */}
        <button type= 'submit ' className={`submit-btn ${isFormValid ? 'active' : ''}`} disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  ) 
} 

export default Login 
