import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            moods : [
                {name: "angry", color:"red", votes: 0, emoji: "&#128553;"},
                {name: "energetic/excited", color:"orange", votes: 0, emoji: "&#128553"},
                {name: "happy", color:"yellow", votes: 0, emoji: "&#128553"},
                {name: "calm", color:"green", votes: 0, emoji: "&#128553"},
                {name: "sad", color:"blue", votes: 0, emoji: "&#128553"},
                {name: "exhausted/tired", color:"purple", votes: 0, emoji: "&#128553"}
            ]
        }
    }
uij
    vote (i) {
        let newMoods = [...this.state.moods];
        newMoods[i].votes++;
        function swap(array, i, j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({moods: newMoods});
    }

render (){
  return (
    <div className="App">
      <body>

<h1>How are you feeling?</h1>

<div className="container">
    {
        this.state.moods.map((mood, i) =>
       <button onClick={this.vote.bind(this, i)}>
            <div key={i} id="box" className={mood.color}>
                <div className="voteCount">
                    <h1>{mood.votes}</h1>
                </div>
                <div className="moodName">
                    <h2>{mood.name}</h2>
                </div>
            </div>
            </button>
        )
    }
</div>

</body>
    </div>
  );
 }
}

export default App;
