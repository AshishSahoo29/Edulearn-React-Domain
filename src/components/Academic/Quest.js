import React from 'react'
import './Quest.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Input, TextField } from '@mui/material';



export default function Quest() {
  return (
    <div className='Quest'>
        <div className='Q-card'>            
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

                    <div className='Question'>
                      <input type="text" placeholder='type the question here'></input>                      
                      
                      <RadioGroup className='Rad'
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="Option1" id="rd1"  control={<Radio />} label={<Input  variant='standard' size='small'/>} />
                        <FormControlLabel value="Option2" control={<Radio />} label={<TextField variant='standard' size='small'/>} />
                        <FormControlLabel value="Option3" control={<Radio />} label={<TextField variant='standard' size='small'/>} />
                        <FormControlLabel value="Option4" control={<Radio />} label={<TextField variant='standard' size='small'/>} />
                      </RadioGroup>
                      <div className='Btn'>
                      <Button >Save</Button>
                      <Button >Add New Question</Button>
                      </div>               
                      </div>                         
                </form>            
        </div>      
    </div>
  )
}
