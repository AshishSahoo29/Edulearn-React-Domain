import React from "react";

import './Register.css';

 
export default class Registration extends React.Component  {
    constructor (){
        super();
        this.state={
            firstName:'',
            Username:'',
            Email:'',
            Password:'',
            RType:'',
           
        }
        this.firstName=this.firstName.bind(this);
        this.Username=this.Username.bind(this);
        this.Email=this.Email.bind(this);
        this.Password=this.Password.bind(this);
        this.RType=this.RType.bind(this);
     }

     firstName(event){
        this.setState({firstName:event.target.value})
     }

     Username(event){
        this.setState({Username:event.target.value})
     }

     Email(event){
        this.setState({Email:event.target.value})
     }

     Password(event){
        this.setState({Password:event.target.value})
     }
     RType(event){
        this.setState({RType:event.target.value})
     }

     register(event){
        fetch('http://localhost:8080/api/users/signup', {
                  method: 'post',
                  headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name:this.state.firstName,
                    username:this.state.Username,
                    email:this.state.Email,
                    password:this.state.Password,
                    roles:this.state.RType
                    
                  })
                }).then(Response=>Response.json())
                    .then((Result)=>{
                    if(Result.status===1)
                    alert("Sorry error");
                    else
                        alert("Sorry error");
                  })
     }
     
    render()
    {
    return (
        <div className="Glasses">
        <div className="Form-glass">
            <form>
                <div className="New">
                <label >Full Name</label>
                <input type="text" onChange={this.firstName} 
                placeholder="Your name.."></input>
        
                <label >Username</label>
                <input type="text" onChange={this.Username}
                placeholder="Your  Username.."></input>
        
      
                  
        
                    <label>Type</label>
                <input type="text" onChange={this.RType} 
                placeholder="Your email id.."></input>
         <label>Email Id</label>
                <input type="text" onChange={this.Email} 
                placeholder="Your email id.."></input>
        
                <label >Password</label>
                <input type="Password" onChange={this.Password}
                placeholder="Enter your password.."></input>
        
        
        
                <input type="submit" onClick={this.register}/>             
                </div>
            </form>
        </div> 
        </div>
     );
}
     }

