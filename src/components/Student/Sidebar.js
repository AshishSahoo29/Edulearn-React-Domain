import React, { useState } from 'react'
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
              >
                <span>
                  {item.heading}
                </span>
              </div>
            )
          })}
            
    </div>
  </div>
  )
}

export default Sidebar
