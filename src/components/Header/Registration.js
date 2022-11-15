import React, { Component } from "react";
import { Button, Form, Input,InputGroup } from 'reactstrap';
import './Register.css';

 
export default class Registration extends Component  {
    constructor (props){
        super(props);
        this.state={
            firstName:'',
            Username:'',
            Email:'',
            Password:'',
            RType:'',
           
        };/*
        this.firstName=this.firstName.bind(this);
        this.Username=this.Username.bind(this);
        this.Email=this.Email.bind(this);
        this.Password=this.Password.bind(this);
        this.RType=this.RType.bind(this);*/
     }
/*
     firstName(event){
        this.setState({firstName:event.value})
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
     */
     register(){
      alert(this.state.firstName);
        fetch('http://localhost:8080/api/users/signup', {
                  method: 'post',
                  headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                     firstName:this.state.firstName,
                     Username:this.state.Username,
                    Email:this.state.Email,
                    Password:this.state.Password,
                    RTpye:this.state.RType
                    
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
            <Form>
                <InputGroup className="mb-3">

                      <Input type="text" onChangeText={this.firstName} />

                    </InputGroup>
        
                 <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.Username} placeholder="Enter Employee Name" />

                    </InputGroup>


                 <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.RType} placeholder="Enter Employee Name" />

                    </InputGroup>


              <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.Email} placeholder="Enter Employee Name" />

                    </InputGroup>


                   <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.Password} placeholder="Enter Employee Name" />

                    </InputGroup>

                    <Button  onClick={this.register}  color="success" block>Create Account</Button>             
                
            </Form>
        </div> 
        </div>
     );
}
     }

