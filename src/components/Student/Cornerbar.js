import React from 'react'
import './Cornerbar.css';


export default function Cornerbar() {
  return (
    <div className='pr-card'>
      <div className='round'> 
        <img source='' alt=""/>       
        <h1>Ashish Sahoo</h1>
        <p>200301120117@cutm.ac.in</p>
      </div>
      <div className='stack'>
        <ul >
            <li ><a href="Academic.js"> <i class="fa fa-user"></i>Academic </a></li>
            <li><a href="Activity.js"> <i class="fa fa-calendar"></i> Activity </a></li>
            <li><a href="Performance.js"> <i class="fa fa-edit"></i>Performance </a></li>
        </ul>
      </div>
    </div>
  )
}
