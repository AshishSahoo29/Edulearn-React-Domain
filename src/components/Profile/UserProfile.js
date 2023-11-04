import React from 'react';
import './UserProfile.css'; // Import your custom CSS file for styling

const UserProfile = () => {
  return (
    <div className="container">
      <div className="main-body">
        <div className="user-profile">
          <div className="profile-picture">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            <h4>Ashish Sahoo</h4>
            <p className="user-title">Full Stack Developer</p>
            <p className="user-location">Jatni, Bhubaneswar</p>
            <button className="edit-button">Edit</button>
          </div>
        </div>
        <div className="user-info">
          <div className="info-item">
            <h6 className="info-label">Full Name</h6>
            <p className="info-value">Ashish Kumar Saoo</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Email</h6>
            <p className="info-value">sahooasish750@gmail.com</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Mobile</h6>
            <p className="info-value">(239) 816-9029</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Stream</h6>
            <p className="info-value">BTech CSE</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Address</h6>
            <p className="info-value">Jatni, Bhubaneswar, Odisha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
