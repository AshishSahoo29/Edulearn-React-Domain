import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from '../components/Header/Registration';
import Header from '../components/Header/Header';
import Home from './Header/Home';
import Contact from '../components/Header/Contact';
import About from '../components/Header/About';
import Dashboard from './Header/Dashboard';




function App() {
  return (
      <>
        <Router>
          <Header/>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/Registration' element={<Register/>} />

          </Routes>
          <Routes>  
              <Route path='/Dashboard' element={<Dashboard/>} />    
          </Routes>  
        </Router>
     
      </>

  );
}

export default App;
