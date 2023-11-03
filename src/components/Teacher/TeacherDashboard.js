import React  from 'react';
import './../App.css';
import MainContent from './TMainContent';
import Sidebar from './TSidebar';
import Corner from './TCornerbar';




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