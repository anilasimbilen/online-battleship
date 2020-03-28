import React, { Component } from 'react';
import io from "socket.io-client";
import Board from './Board';
import InGame from './InGame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_state: "building"
    }
  }
  render() {
    return (
      <div>
        {/* <a onClick={async () => {
          var socket = io("http://localhost:5000");
          socket.on("news", function(data) {
            console.log(data);
            socket.emit('my other event', {'my': data});
          })
        }}>
          HELLLOO
        </a> */}
          {
            this.state.game_state === "building" ? <Board onBuildEnd={() => this.setState({game_state: "ingame"})} game_state={this.state.game_state}/> : null 
          }
          {
            this.state.game_state === "ingame" ? <InGame /> : null
          }
      </div>
    );
  }
}

export default App;
