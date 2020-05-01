import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './Die';
import RollDice from './RolleDice';

function App() {
  return (
    <div className='App'>
      <RollDice />
      <h4 style={{ marginTop: '3rem' }}>
        Created by mohammadhossein hosseini github:
        <a href='https://github.com/mohammadhossein211/'> Go to github</a>
      </h4>
    </div>
  );
}

export default App;
