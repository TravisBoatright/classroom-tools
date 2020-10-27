import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            moods : [
                {name: "Angry", color:"red", votes: 0, emoji: "😠"},
                {name: "Energetic/excited", color:"orange", votes: 0, emoji: "🥳"},
                {name: "Happy", color:"yellow", votes: 0, emoji: "😀"},
                {name: "Calm", color:"green", votes: 0, emoji: "😌"},
                {name: "Sad", color:"blue", votes: 0, emoji: "😢"},
                {name: "Exhausted/tired", color:"purple", votes: 0, emoji: "😫"}
            ]
        }
    }

    vote (i) {
        let newMoods = [...this.state.moods];
        newMoods[i].votes++;
        this.setState({moods: newMoods});
    }

render (){
  return (
<body>
    <div className="App">
        <h1>How are you feeling?</h1>

        <div className="container">
            {
                this.state.moods.map((mood, i) =>
            <button key={i} onClick={this.vote.bind(this, i)}>
                    <div id="box" className={mood.color}>
                        <div className="voteCount">
                            <h3>{mood.votes}</h3>
                        </div>
                        <span 
                            className="moodEmoji" 
                            role="img"
                            aria-label={mood.emoji ? mood.emoji : ""}
                            aria-hidden={mood.emoji ? "false" : "true"}>
                            {mood.emoji}
                        </span>
                        <div className="moodName">
                            <h2>{mood.name}</h2>
                        </div>
                    </div>
                    </button>
                )
            }
        </div>

    </div>
</body>

  );
 }
}

export default App;
