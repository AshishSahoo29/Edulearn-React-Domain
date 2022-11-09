import React from "react";

import './Register.css';

 
const Registration = () => {
    return (
        <div className="Form-glass">
            <form>
                <div className="New">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" 
                placeholder="Your name.."></input>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" 
                placeholder="Your  last name.."></input>

                <label for="gender">Gender</label>
                    <select id="gender" name="gender">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    </select>

                <label for="email">Email Id</label>
                <input type="email" id="email" name="email" 
                placeholder="Your email id.."></input>

                <label for="pwd">Password</label>
                <input type="Password" id="p_word" name="password" 
                placeholder="Enter your password.."></input>

                <input type="submit" value="Submit"></input>             
                </div>
            </form>
        </div> 
     );
}
 
export default Registration;