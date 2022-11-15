import React from 'react';
const Dashboard = () => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (!loggedInUser) {
      alert("Login required");
      window.location.href=("/");
    }
 else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};
export default Dashboard;