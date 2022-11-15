import React, {useRef} from "react";
import { Button, Form, Input,InputGroup } from 'reactstrap';
import './Register.css';

 

const Registration = () => {
   const Name = useRef(null);
   const Email = useRef(null);
   const Username = useRef(null);
   const Password = useRef(null);
   const RType = useRef(null);
/*
  function handleClick() {
   console.log(Name.current.value);
   console.log(Email.current.value);
   console.log(Username.current.value);
   console.log(Password.current.value);
   console.log(RType.current.value);
  
  }*/
  function register(){
   alert(Email.current.value);
     fetch('http://localhost:8080/api/users/signup', {
               method: 'post',
               headers: {
                 'Accept': '*/*',
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  name:Name.current.value,
                  username:Username.current.value,
                 email:Email.current.value,
                 password:Password.current.value,
                 roles:RType.current.value
                 
               })
             }).then(Response=>Response.json())
                 .then((Result)=>{
                 if(Result.status===1){
                 alert("Successfully");}
                 else{
                     alert("Sorry error");
               }})
             //  console.log(body)

  }
   /*constructor (props){
        super(props);
        this.state={
            firstName:'',
            Username:'',
            Email:'',
            Password:'',
            RType:'',
           
        };
      */ 
        
       //};
        
        
        /*
        this.firstName=this.firstName.bind(this);
        this.Username=this.Username.bind(this);
        this.Email=this.Email.bind(this);
        this.Password=this.Password.bind(this);
        this.RType=this.RType.bind(this);*/
     
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
     
   

    return (
        <div className="Glasses">
        <div className="Form-glass">
            <Form>
                <InputGroup className="mb-3">

                      <input type="text" ref={Name}  id="message" name="Name"/>

                    </InputGroup>
        
                    <InputGroup className="mb-3">

                     <input type="text" ref={Username} placeholder="Enter Username" />

                     </InputGroup>


                     <InputGroup className="mb-3">

                     <input type="text"  ref={RType} placeholder="Enter Type" />

                     </InputGroup>


                     <InputGroup className="mb-3">

                     <input type="text"  ref={Email} placeholder="Enter Email" />

                     </InputGroup>


                     <InputGroup className="mb-3">

                     <input type="text"  ref={Password} placeholder="Enter Password" />

                     </InputGroup>
                           
                    <Button  onClick={register}  color="success" block>Create Account</Button>             
                
            </Form>
        </div> 
        </div>
     );
    }

export default Registration;