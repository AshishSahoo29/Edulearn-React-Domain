import React, { useState } from 'react';
import './Qpaper.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Input, TextField } from '@mui/material';

export default function Quest() {
   //add state and function to save exam info
   const [examInfo, setExamInfo] = useState({
    name: '',
    date: '',
    duration: '',
    marks: ''
  });

  const handleExamInfoChange = (field, value) => {
    setExamInfo({ ...examInfo, [field]: value });
  };

  const saveExamInfo = () => {
    // You can perform any additional logic here before saving the exam information
    console.log('Saving Exam Information:', examInfo);
    // You can store the examInfo data in a database or perform any other required actions here
  };

  // State to manage quiz questions
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: [{ label: '' }, { label: '' }, { label: '' }, { label: '' }],
    correctAnswer: 'Option1', // Default correct answer is Option1
  });

  // Function to add a new option to the current question
  const addOption = () => {
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, {label: '' }],
    });
  };

   // Function to update the options of the current question
   const handleOptionChange = (index, event) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index].label = event.target.value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  // Function to update the correct answer for the current question
  const handleCorrectAnswerChange = (event) => {
    setCurrentQuestion({
      ...currentQuestion,
      correctAnswer: event.target.value,
    });
  };

  // Function to add a new question to the questions array
  const addQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: [{ label: '' }, { label: '' }, { label: '' }, { label: '' }],
      correctAnswer: 'Option1',//default correct answer
    });
  };

  // Function to delete a question by index
  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };




  //Backend Integration
    //Intrgration
    const handleSaveExamInfo = async () => {
      try {
        const response = await fetch('/api/exams', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(examInfo),
        });
        const data = await response.json();
        console.log('Response from backend:', data);
        // Optionally handle the response from the backend here
      } catch (error) {
        console.error('Error saving exam information:', error);
        // Handle error scenarios here
      }
    };
    const saveQuestions = async () => {
      try {
        const response = await fetch('/api/questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(questions),
        });
        const data = await response.json();
        console.log('Response from backend:', data);
        // Optionally handle the response from the backend here
      } catch (error) {
        console.error('Error saving questions:', error);
        // Handle error scenarios here
      }
    };
    

  return (
    <div className='Quest'>
      <div className='Q-card'>
        <form className='Q-Set'>
          <div className='Info'>
            {/* ... (previous code) ... */}
            <label htmlFor="exam-name">Name:</label>
            <input type="text" 
             placeholder="Enter Exam Name"
             value={examInfo.name}
             onChange={(e) => handleExamInfoChange('name', e.target.value)}/>

            <label htmlFor="date">Date</label>
            <input type="datetime-local" 
            value={examInfo.date}
            onChange={(e) => handleExamInfoChange('date', e.target.value)}/>

            <label htmlFor="time">Duration:</label>
            <input type="text" 
             placeholder="Enter Duration"
             value={examInfo.duration}
             onChange={(e) => handleExamInfoChange('duration', e.target.value)}/>

            <label htmlFor="marks">Marks:</label>
            <input type="text" 
            placeholder="Enter Marks"
            value={examInfo.marks}
            onChange={(e) => handleExamInfoChange('marks', e.target.value)}/>
            <br></br>
            <Button onClick={handleSaveExamInfo}>Save Info</Button>
          </div>

          <div className='Question'>
            <input
              type="text"
              placeholder='Type the question here'
              value={currentQuestion.question}
              onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
            />

            <RadioGroup
              className='Rad'
              aria-labelledby="demo-radio-buttons-group-label"
              value={currentQuestion.correctAnswer}
              onChange={handleCorrectAnswerChange}
              name="radio-buttons-group"
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={`Option${index + 1}`}
                  control={<Radio />}
                  label={
                    <>
                    <p>Option {index+1}</p>
                      <Input
                      style={{top:"5px"}}
                        variant='standard'
                        size='small'
                        value={option.label}
                        onChange={(e) => handleOptionChange(index, e)}
                      />
                      </>
                    }
                  />
              ))}
            </RadioGroup>

            

            <div className='Bbtn'>
              <Button onClick={addOption}>Add Option</Button>
              <Button onClick={addQuestion}>Save</Button>
              <Button onClick={() => deleteQuestion(questions.length - 1)}>Delete Last Question</Button>
            </div>
          </div>

          
        </form>
        {/* Display all questions */}
        <div className='Q-all'>
          <div className='F-info'>            
            <strong>Name:</strong> {examInfo.name}
            <br />
            <strong>Date:</strong> {examInfo.date}
            <br />
            <strong>Duration:</strong> {examInfo.duration}
            <br />
            <strong>Marks:</strong> {examInfo.marks}           
          </div>
          <div className='F-quest'>
            <h2>All Questions</h2>
            <ul>
              {questions.map((q, index) => (
                <li key={index}>
                  <strong>Question:</strong> {q.question}
                  <br />
                  <strong>Options:</strong>  {q.options.map((option) => option.label).join(', ')}
                  <br />
                  <strong>Correct Answer:</strong> {q.correctAnswer}
                  <Button onClick={() => deleteQuestion(index)}>Delete</Button>
                </li>
              ))}
            </ul>
            </div>
            <Button onClick={saveQuestions}>Submit</Button>
          </div>

      </div>
    </div>
  );
}
