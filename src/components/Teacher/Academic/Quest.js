import React from 'react'
import './Quest.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Input, TextField } from '@mui/material';


var counter = 1; //limits amount of transactions
function addElements() {
  let bodys=document.getElementById("Question") 
  if (counter < 5) //only allows 4 additional transactions
    {
        let div = document.createElement('div');
        div.id = 'row' + counter;
        
        bodys.appendChild(div);

        let input = document.createElement('textarea');
        input.id='question'+counter;
        input.col=30;
        input.row=200;
        input.placeholder = 'Question '+counter
        div.appendChild(input);

        let rg = document.createElement('fieldset');
        rg.id = 'radiogrp' + counter;
        div.appendChild(rg);
/////Radio 1        
var radioInput1 = document.createElement('input');
radioInput1.setAttribute('type', 'radio');
radioInput1.setAttribute('name', "q"+counter);
radioInput1.setAttribute('id', counter+"q1");
radioInput1.setAttribute('class', "formcontrolr");
radioInput1.setAttribute('for',counter);
radioInput1.setAttribute('label',counter);
rg.appendChild(radioInput1);

var labelInput1 = document.createElement('label');
labelInput1.setAttribute('for', counter+"q1");
labelInput1.innerHTML="option 1";
rg.appendChild(labelInput1);



var textInput1 = document.createElement('input');
textInput1.setAttribute('type', 'text');
textInput1.setAttribute('class', "formcontroli");
textInput1.setAttribute('name', "q1");
rg.appendChild(textInput1);

/////Radio 2        
var radioInput2 = document.createElement('input');
radioInput2.setAttribute('type', 'radio');

radioInput2.setAttribute('name', "q"+counter);
radioInput2.setAttribute('class', "formcontrolr");

radioInput2.setAttribute('for',counter);
radioInput2.setAttribute('label',counter);

rg.appendChild(radioInput2);

var labelInput2 = document.createElement('label');
labelInput2.setAttribute('for', counter);
labelInput2.innerHTML="option 2";
rg.appendChild(labelInput2);



var textInput2 = document.createElement('input');
textInput2.setAttribute('type', 'text');
textInput2.setAttribute('name', "q1");
rg.appendChild(textInput2);


/////Radio 3        
var radioInput3 = document.createElement('input');
radioInput3.setAttribute('type', 'radio');
radioInput3.setAttribute('name', "q"+counter);
radioInput3.setAttribute('class', "formcontrolr");

radioInput3.setAttribute('for',counter);
radioInput3.setAttribute('label',counter);

rg.appendChild(radioInput3);


var labelInput3 = document.createElement('label');
labelInput3.setAttribute('for', counter);
labelInput3.innerHTML="option 3";
rg.appendChild(labelInput3);


var textInput3 = document.createElement('input');
textInput3.setAttribute('type', 'text');
textInput3.setAttribute('name', "q"+counter);
rg.appendChild(textInput3);


/////Radio 4        
var radioInput4 = document.createElement('input');
radioInput4.setAttribute('type', 'radio');
radioInput4.setAttribute('name', "q"+counter);
radioInput4.setAttribute('class', "formcontrolr");

radioInput4.setAttribute('for',counter);
radioInput4.setAttribute('label',counter);


rg.appendChild(radioInput4);


var labelInput4 = document.createElement('label');
labelInput4.setAttribute('for', counter);
labelInput4.innerHTML="option 4";
rg.appendChild(labelInput4);


var textInput4 = document.createElement('input');
textInput4.setAttribute('type', 'text');
textInput4.setAttribute('name', "q1");
rg.appendChild(textInput4);


    }

    counter++
    if (counter >= 6) {
        alert("You have reached the maximum transactions.")
    }
}

export default function Quest() {
  return (
    <div className='Quest'>
        <div className='Q-card'>            
                
                    <div className='Question' id="Question">
                    <br/>
                    <h2>Question Bank</h2>
                    <br/>
    
                     <label> Question 1:</label> <TextField className="questionName" name="questions" placeholder='Type the question here' ></TextField>                      
                      
                      <RadioGroup className='Rad'
                        defaultValue="female"
                        name="option"
                      >
                      <p>Option 1</p> 
                        <FormControlLabel  value="1" id="rd1" name='option'  control={<Radio />} label="1" /><Input name='optionv'  variant='standard' size='small'/>
                        <p>Option 2</p> 
                        <FormControlLabel value="2" id="rd2" name='option'  control={<Radio />} label="2"/><Input name='optionv'  variant='standard' size='small'/>
                        <p>Option 3</p> 
                        <FormControlLabel value="3" id="rd3" name='option'  control={<Radio />} label="3"/><Input name='optionv'  variant='standard' size='small'/>
                        <p>Option 4</p> 
                        <FormControlLabel value="4" id="rd4"name='option'   control={<Radio />} label="4"/><Input name='optionv'  variant='standard' size='small'/>
                      </RadioGroup>

                      </div>                         
                      <div className='Btn'>
                      <Button onClick={saveQues}>Save</Button>
                      <Button onClick={addElements}>Add New Question</Button>
                      
                      </div>               
                            
        </div>      
    </div>
  )
}
function saveQues(){
  let questions = document.getElementsByName("questions");
  let optionv = document.getElementsByName("optionv");

  questions.forEach((num1, index) => {
    const num2 = optionv[index];
    console.log(num1.value, num2.value);
  });

}
