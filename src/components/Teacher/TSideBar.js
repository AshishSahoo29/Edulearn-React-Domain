import React, { useState } from 'react'
import '../Student/Data'
import { SideBarData } from '../Student/Data';





const TSidebar = () => {

  const[selected,setSelected] = useState(0)

  return (
    <div className='Sidebars'>
        <div className='Title'>
            <span>Teacher Dashboard</span>            
            
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

export default TSidebar
