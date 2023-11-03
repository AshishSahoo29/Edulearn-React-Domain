import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from '../components/Header/Registration';
import Header from '../components/Header/Header';
import Home from './Header/Home';
import Contact from '../components/Header/Contact';
import About from '../components/Header/About';
import Dashboard from './Header/Dashboard';
import TeacherDashboard from './Teacher/TeacherDashboard';
import Quest from './Teacher/Academic/Quest';




function App() {
  return (
      <>
        <Router>
          <Header/>
          <Routes>
              <Route exact path='' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/Registration' element={<Register/>} />
              <Route path='/Exam' element={<Quest/>} />
              

          </Routes>
          <Routes>  
          <Route path='/Dashboard' element={<Dashboard/>} />    
          <Route path='/TeacherDashboard' element={<TeacherDashboard/>} />    
          </Routes>  
        </Router>
     
      </>

  );
}

export default App;
