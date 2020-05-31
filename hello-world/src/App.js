import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from'./components/Message'
import Counter from './components/Counter.js'
function App() {
  return (
    <div className="App">
      <Counter/>
     {/* 
        <Message />
      <Greet name="Tony Stark" heroName="Iron Man">
          <p>
            This is children props
          </p>
       </Greet>
       <Greet name="Steve" heroName="Captain America">
         <button>Action</button> 
      </Greet>
       <Greet name="Thor" heroName="God of Thunder"/>
  
      <Welcome name="Tony Stark" heroName="Iron Man"/>
      <Welcome name="Steve" heroName="Captain America"/>
      <Welcome name="Thor" heroName="God of Thunder"/>
      */}
      
      
    </div>
  );
}
export default App;
