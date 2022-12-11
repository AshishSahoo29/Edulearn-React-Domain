import React, {useRef} from "react";
import { Button, Form, InputGroup } from 'reactstrap';
import './Register.css';
import configData from './config.json'
//import Dashboard from "./Dashboard";
 

const Registration = () => {
   const Name = useRef(null);
   const Email = useRef(null);
   const Username = useRef(null);
   const Password = useRef(null);
   const RType = useRef(null);

  function register(){
  // alert(Email.current.value);
     fetch(configData.SERVER_URL+ 'api/users/signup', {
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
                  window.localStorage.setItem("authenticated", true);
                  window.localStorage.setItem("users", JSON.stringify(Result));
                  window.location.href=("/Dashboard");
                  alert("Successfully");}
                 else{
                     alert("Sorry error");
               }})
             //  console.log(body)

  }
  
     
   

    return (
        <div className="Glasses">
        <div className="Form-glass">
            <Form>
                <InputGroup className="mb-3">
                     <label>Name</label>
                      <input type="text" ref={Name}  id="message" name="Name"/>

                    </InputGroup>
        
                    <InputGroup className="mb-3">
                    <label>Username</label>
                     <input type="text" ref={Username} placeholder="Enter Username" />

                     </InputGroup>

                     
                     <InputGroup className="mb-3">
                     <label>Type</label>
                     <input type="text"  ref={RType} placeholder="Enter Type" />

                     </InputGroup>


                     <InputGroup className="mb-3">
                     <label>Email</label>
                     <input type="text"  ref={Email} placeholder="Enter Email" />

                     </InputGroup>


                     <InputGroup className="mb-3">
                     <label>Password</label>
                     <input type="text"  ref={Password} placeholder="Enter Password" />

                     </InputGroup>
                           
                    <Button  onClick={register}  color="success" block>Create Account</Button>             
                
            </Form>
        </div> 
        </div>
     );
    }

export default Registration;