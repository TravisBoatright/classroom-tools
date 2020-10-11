import React from 'react';
import './App.css';

class App extends React.Component {
render (){
  return (
    <div className="App">
      <body>

<h1>How are you feeling?</h1>

<div id="container">
    
        <div id="box" className="red">
            <span role="img" aria-label="upset emoji">&#128553;</span>
            <h2>Red</h2>
        </div>

        <div id="box" className="orange">
            <span role="img" aria-label="sad emoji">&#128533;</span>
            <h2>Orange</h2>
        </div>

        <div id="box" className="yellow">
            <span role="img" aria-label="neutral emoji">&#128528;</span>
            <h2>Yellow</h2>
        </div>

        <div id="box" className="green">
            <span role="img" aria-label="happy emoji">&#128512;</span>
            <h2>Green</h2>
        </div>

        <div id="box" className="blue">
            <span role="img" aria-label="excited emoji">&#129321;</span>
            <h2>Blue</h2>
        </div>

</div>

</body>
    </div>
  );
 }
}

export default App;
