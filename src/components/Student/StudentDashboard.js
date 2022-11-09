import React  from 'react';
import './../App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';


const StudentDashboard = () => {
    return (
        <div className="Std">
            <div className='AppGlass'>
            <Sidebar/>
            <MainContent/>
            </div>            
        </div>
      );
}
 
export default StudentDashboard;