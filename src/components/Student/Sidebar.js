import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Sidebar.css'


import { SideBarData } from './Data';

const Sidebar = () => {

  const[selected,setSelected] = useState(0)

  return (
    <div className='Sidebars'>
        <div className='Title'>
            <span>Student Dashboard</span>            
            
        </div>
        {/*menu */}
        <div className='menu'>
          {SideBarData.map((item,index)=>{
            return(
              <div className={selected===index?'menu-item active':'menu-item'}
              key={index}
              onClick={()=>setSelected(index)}
              onDoubleClick={()=>this.state({showSomething: true})}
              >
                <span>
                  {item.heading}
                </span>
                <Link to = {item.URL} ></Link>
              </div>
            )
          })}
            
    </div>
  </div>
  )
}

export default Sidebar
