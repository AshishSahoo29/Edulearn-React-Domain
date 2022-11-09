import React from "react";


const Contact = () => {
    return ( 
        <div className="Form-glass">
            <h1>Contact Form</h1>
            <form>
                <div className="forme">
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