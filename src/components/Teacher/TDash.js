import React from "react";
import './../App.css';
import TSidebar from './TSideBar';
import MainContent from '../Student/MainContent';

const TeacherDashboard = () => {
    return (
        <div className="Std">
            <div className='AppGlass'>
            <TSidebar/>
            <MainContent/>
            </div>            
        </div>
      );
}
 
export default TeacherDashboard;