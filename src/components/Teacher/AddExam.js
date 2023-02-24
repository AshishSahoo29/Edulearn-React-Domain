import React from "react";
export default function AddExam(){
    return (
<form className='Q-Set'>
                  <div className='Info'>
                    <label for="exam-name">Name:</label>
                    <input type="text" placeholder="Advance Java"></input>

                    <label for="date">Date</label>
                    <input type="datetime-local"></input>

                    <label for="time">Duration:</label> 
                    <input type="text"></input>

                    <label for="marks">Marks:</label>
                    <input type="text"></input>
                    </div>
</form>
)
}