import React from 'react'
import './profile.css';

export default function profile() {
  return (    
      <div class="row">
        <div class="profile-nav col-md-3">
            <div class="panel">
                <div class="user-heading round">
                    <a href="#">
                        <img src="./images/newone.jpeg" alt=""/>
                    </a>
                    <h1>Ashish Sahoo</h1>
                    <p>200301120117@cutm.ac.in</p>
                </div>

                <ul class="nav nav-pills nav-stacked">
                    <li class="active"><a href="#"> <i class="fa fa-user"></i> Profile</a></li>
                    <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span class="label label-warning pull-right r-activity">9</span></a></li>
                    <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
                </ul>
            </div>
         </div>
    </div>
  );
}

