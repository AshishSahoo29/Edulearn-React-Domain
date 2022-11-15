import React from "react";
import '../Header/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            "service_h13vz5t",
            "template_mvnwttu",
            e.target,
            "4bDIq_gPv-98dQC8O"
            ).then(res=>{
                console.log(res);
        }).catch(err=>console.log(err));
    }
    return ( 
        <div className="CT-main">
            <h1>Contact Form</h1>
            <form onSubmit={sendEmail}>
                <div className="ctf">
                <label>name</label>
                <input type='text' name='name'></input>

                <label>Email</label>
                <input type='email' name='user_email'></input>

                <label>Message</label>
                <textarea name='message' rows='4'></textarea>

                <input type='submit' value='Send'/>
                </div>
            </form>
        </div>
     );
}
 
export default Contact;