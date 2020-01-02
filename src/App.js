import React from 'react';
import './App.css';


function App() {
  return (
    <div className = "container-main">
      <img 
      src = {require('./lain-laughing.gif')}
      alt = "Lain laughing"
      className = "image-container"></img>
      <div className="main-text-wrapper">
        <p> the tea that I drank <br/>
        <br/> at the corner store we love <br/>
        <br/> was sweet and cold <br/>
        <br/> just how i liked it <br/>
        <br/> i don't know how <br/>
        <br/> you push all the right buttons <br/>
        <br/> but this tea isn't nearly as sweet <br/>
        <br/> without you <br/>
        <br/>
        <br/> zwe
        </p>
      </div>
      <img 
      src = {require('./lain-yearning.gif')}
      alt = "Sad Lain"
      className = "image-container"></img>
      <div className="main-text-wrapper"></div>
    </div>
    
  );
}

export default App;
