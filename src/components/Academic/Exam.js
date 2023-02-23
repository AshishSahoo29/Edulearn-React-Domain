import React from 'react'
import './Exam.css';
import { Button } from '@mui/material';

export default function Exam() {
  return (
    <div className='Exa'>
      <div className='Exa-Card'>
        <div className='Head'>
          <span>(0/20)</span>
          <h4>MCQ Quiz</h4>
        </div>
        <div className='Instruct'>
          <span>Advance Java Basic Questions</span>
          <h4>Read the instructions written below</h4>
          <p>You will be awarded 1 mark for each correct answer and no negative marks will be offered for wrong answer.</p>          
          <p>Do not use improper means during exam. Your actions will be recorded.</p>
          <br></br>
          <Button onClick={()=><a href='#'></a>}>Start the Quiz</Button>
        </div>
      </div>      
    </div>
  )
}
