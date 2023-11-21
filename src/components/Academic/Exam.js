import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exam.css';
import { Button } from '@mui/material';

export default function Exam() {
  const [quizData, setQuizData] = useState(null); // State to store fetched quiz data
  const [quizTitle, setQuizTitle] = useState('Advance Java Basic Questions');
  const navigate = useNavigate(); // Hook to navigate to another page

  // Function to fetch quiz data from the API
  const fetchQuizData = async () => {
    try {
      const response = await fetch('API_ENDPOINT_HERE'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch quiz data');
      }
      const data = await response.json();
      setQuizData(data); // Set the fetched quiz data to state
      // Update the title here dynamically if available in the fetched data
      if (data && data.title) {
        setQuizTitle(data.title);
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      // Handle error scenarios here
    }
  };

  // Fetch quiz data when the component mounts (auto-fetch)
  useEffect(() => {
    fetchQuizData();
  }, []); 

  // Function to handle the click event for starting the quiz (navigation)
  const handleStartQuiz = () => {
    navigate('/quiz'); // Navigate to the '/quiz' route
  };

  return (
    <div className='Exa'>
      <div className='Exa-Card'>
        <div className='Head'>
          <span>(0/20)</span>
          <h4>MCQ Quiz</h4>
        </div>
        <div className='Instruct'>
          <span>{quizTitle}</span>
          <h4>Read the instructions written below</h4>
          <p>You will be awarded 1 mark for each correct answer and no negative marks will be offered for wrong answer.</p>          
          <p>Do not use improper means during exam. Your actions will be recorded.</p>
          <br></br>
          <Button onClick= {handleStartQuiz}>Start the Quiz</Button>
        </div>
      </div>      
    </div>
  )
}
