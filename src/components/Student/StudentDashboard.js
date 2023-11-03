import React  from 'react';
import './../App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Corner from './Cornerbar';



const StudentDashboard = () => {
    return (
        <div className="Std">
            <div className='AppGlass'>
            <Sidebar/>
            <MainContent/>
            <Corner/>
            </div>                       
        </div>
      );
}
 
export default StudentDashboard;