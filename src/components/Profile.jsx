import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className= 'profile '>

        {/* header section with title */}
        <div className= 'header '>
          <h3>Account Settings</h3>
        </div>

        {/* card section with profile pic and info */}
        <div className= 'card '>
          <div className= 'pic '>
            <img src= '/assets/Ellipse 114.png ' alt= 'profile ' className= 'profile-pic '/>
            <div className= 'camera-icon '>
              <img src= '/assets/Group 1585.png ' alt= 'icon '/>
            </div>
          </div>

          {/* user information: name and email */}
          <div className= 'info '>
            <h3>Mary Doe</h3>
            <p>Marry@Gmail.com</p>
          </div>
        </div>
      </div>

      {/* description section */}
      <div className= 'description '>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis asperiores labore laudantium repellendus, numquam velit ad ea ipsum corrupti, nostrum fuga</p>
      </div>
      {/* horizontal lines for separation */}
      <hr className= 'line1 '/>
      <hr className='line2'/>
    </div>
  )
}

export default Profile
