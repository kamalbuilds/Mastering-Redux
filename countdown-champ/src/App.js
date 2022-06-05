import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [deadline,setDeadline]=useState('July 10,2022');
  const [newdeadline,setNewdeadline]=useState('');
  function changedeadline(){
    setDeadline(newdeadline);
  }
  return (
        <div className='App'>
          <div>Countdown to {deadline}</div>
          <div className='parent'>
            <div className='days'>14 days</div>
            <div className='hrs'>30 hours</div>
            <div className='min'>15 minutes</div>
            <div className='sec'>20 seconds</div>
          </div>
          <div>
            <input placeholder='new date' onChange={(event)=> setNewdeadline(event.target.value)}/>
              <button onClick={()=> changedeadline()}>Submit</button>
          </div>
        </div>
  );
}

export default App;
