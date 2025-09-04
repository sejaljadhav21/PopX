import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    // function to redirect user to the login page
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className='signup-container'>
            <h1>Create your PopX account</h1>
            {/* signup form */}
            <form >
                {/* Full Name input */}
                <div className='input'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input type='text' id='fullName' placeholder='Marry Doe' />
                </div>

                {/* Phone Number input */}
                <div className='input'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' id='phone' placeholder='+00 0000000000' />
                </div>
                {/* Email Address input */}
                <div className='input'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' placeholder='MarryDoe@gmail.com' />
                </div>
                {/* Password input */}
                <div className='input'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='********' />
                </div>
                {/* Company Name input */}
                <div className='input'>
                    <label htmlFor='company'>Company Name</label>
                    <input type='text' id='company' placeholder='Marry Doe' />
                </div>
                {/* radio buttons to select if user is an agency or not */}
                <div className='choice'>
                    <p>Are you an Agency?</p>
                    {/* yes option */}
                    <input type='radio' id='yes' name='agency' value='yes' />
                    <label htmlFor='yes'>Yes</label>
                    {/* no option */}
                    <input type='radio' id='no' name='agency' value='no' />
                    <label htmlFor='no'>No</label>
                </div>
                {/* button to submit the form and create account */}
                <button className='btn-create-account' type='submit' onClick={goToLogin}>Create Account</button>
            </form>
        </div>
    )
}

export default Signup
