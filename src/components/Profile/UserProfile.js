import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Import your custom CSS file for styling

const UserProfile = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/userProfile');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setUserData(data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching user profile data:', error);
        // Handle error scenarios here
      }
    };

    fetchUserData(); // Fetch data when the component mounts
  }, []);

  if (!userData) {
    return <p>Loading...</p>; // Show loading indicator while fetching data
  }

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
            <h4>{userData.name}</h4>
            <p className="user-title">{userData.role}</p>
            <p className="user-location">{userData.location}</p>
            <button className="edit-button">Edit</button>
          </div>
        </div>
        <div className="user-info">
          <div className="info-item">
            <h6 className="info-label">Full Name</h6>
            <p className="info-value">{userData.name}</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Email</h6>
            <p className="info-value">{userData.email}</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Mobile</h6>
            <p className="info-value">{userData.phone}</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Stream</h6>
            <p className="info-value">{userData.branch}</p>
          </div>
          <div className="info-item">
            <h6 className="info-label">Address</h6>
            <p className="info-value">{userData.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
