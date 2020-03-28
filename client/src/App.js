import React, { Component } from 'react';
import io from "socket.io-client";
import Board from './Board';
import InGame from './InGame';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_state: "connecting",
      playerData: null,
      roomName: "",
      username: "",
      userId: "",
      isFormOneValidated: false,
      gameId: -1,
      enemy: null,
      game: null,
      startable: false,
      isHost: false,
      opponentReady: false
    }
    
  }
  componentDidMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("INITIAL_USER_DATA", (data) =>  {
      this.setState({
        userId: data.user_id
      })
    });
    this.socket.on("GAME_INFO", (data) => {
      this.setState({
        gameId: data.game_id,
        game_state: "waiting",
        isHost: true
      })
    });
    this.socket.on("OPPONENT_DISCONNECTED", (data) => {
      if(this.state.game_state === "build" || this.state.game_state === "waiting") {
        this.setState({
          game_state: "waiting",
          startable: false,
          enemy: null
        })
      }
    })
    this.socket.on("SUCCESS_CONNECTION", ({enemy, game}) => {
        this.setState({enemy, gameId: game.id, roomName: game.name, game_state: this.state.game_state === "connecting" ? "waiting" : this.state.game_state, startable: true});
    });
    this.socket.on("START_GAME", (data) => {
      this.setState({game_state: "building"});
    });
    this.socket.on("OPPONENT_READY", (data) => {
      this.setState({opponentReady: true});
    })
  }
  createGame = () => {
    this.socket.emit('CREATE_GAME', {
      room_name: this.state.roomName,
      username: this.state.username,
      user_id: this.state.userId,
      username: this.state.username
    });
  }
  startGame = () => {
    this.socket.emit('STARTING_GAME', {
      game_id: this.state.gameId
    });
  }
  createRoomOnSubmit = () => {
    let nu = this.state.username.trim();
    let ng = this.state.roomName.trim();
    this.setState({
      username: nu,
      roomName: ng,
      isFormOneValidated: true
    });
    if(nu.length === 0 || ng.length === 0) return;
    this.createGame();
  }
  connectGameOnSubmit = (e) => {
    e.preventDefault();
    let nu = this.state.username.trim();
    let ng = this.state.gameId;
    this.setState({
      username: nu,
      roomName: ng,
      isFormOneValidated: true
    });
    if(nu.length === 0 || ng === -1) return;
    this.socket.emit("CONNECT_GAME", {
      game_id: this.state.gameId,
      username: nu,
      user_id: this.state.userId
    });
  }
  render() {
    return (
      <div>
        {
          this.state.game_state === "waiting" ? 
            <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{padding: "3vh"}}>
                  {this.state.startable ? "Ready" : "Waiting for a player to join"}
                </h1>
                <div style={{width: "70%", display: "flex", alignItems: "center", flexDirection: "column"}}>
                  <ListGroup style={{width: "100%"}}>
                    <ListGroup.Item active={true}>{this.state.roomName}</ListGroup.Item>
                    <ListGroup.Item variant="info">ID: {this.state.gameId}</ListGroup.Item>
                    <ListGroup.Item variant="success">{this.state.username}</ListGroup.Item>
                    <ListGroup.Item variant={this.state.startable ? "danger" : "light"}>{this.state.enemy ? this.state.enemy.username : "Waiting for a connection..."}</ListGroup.Item>
                  </ListGroup>
                  <Button style={{marginTop: "3vh", alignSelf: "flex-end"}} size="lg" disabled={!this.state.startable || !this.state.isHost} onClick={this.state.isHost ? this.startGame : () => {}}>
                    {this.state.isHost ? "Start" : "Waiting for the host to start..."}
                  </Button>
                </div>
            </div>
          :
          null
        }
        {
            this.state.game_state === "connecting" ? 
            <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div style={{width: "70%", height: "20%", marginTop: "10vh"}}>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Create Game
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Form ref={r => this.createForm = r} validated={this.state.isFormOneValidated} onSubmit={e => {
                      e.preventDefault();
                      this.createRoomOnSubmit();
                    }}>
                      <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required placeholder="Pick a username" value={this.state.username} onChange={e => {
                          e.preventDefault();
                          this.setState({
                            username: e.target.value
                          })
                        }}/>
                      </Form.Group>
                      <Form.Group controlId="formRoomname">
                        <Form.Label>Room Name</Form.Label>
                        <Form.Control required placeholder="Enter a room name" value={this.state.roomName} onChange={e => {
                          e.preventDefault();
                          this.setState({
                            roomName: e.target.value
                          })
                        }}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Create
                      </Button>
                    </Form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Connect a game
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <Form onSubmit={this.connectGameOnSubmit}>
                      <Form.Group controlId="formUsernameConnect">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required placeholder="Pick a username" value={this.state.username} onChange={e => {
                          e.preventDefault();
                          this.setState({
                            username: e.target.value
                          })
                        }}/>
                      </Form.Group>
                      <Form.Group controlId="formRoomnameConnect">
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control required placeholder="Enter id of the game" value={this.state.gameId} onChange={e => {
                          e.preventDefault();
                          this.setState({
                            gameId: Number(e.target.value)
                          })
                        }}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Connect
                      </Button>
                    </Form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              </div>
            </div> 
            : null
        }
          {
            this.state.game_state === "building" ? <Board isOpponentReady={this.state.opponentReady} onReady={() => {
              this.socket.emit("PLAYER_READY_UPDATE", {
                user_id: this.state.userId,
                ready_state: true,
                game_id: this.state.gameId
              });
            }} onBuildEnd={(e) => {
              this.setState({game_state: "ingame", playerData: e.data});
            }} game_state={this.state.game_state}/> : null 
          }
          {
            this.state.game_state === "ingame" ? <InGame turn={this.state.isHost ? "self" : "enemy"} gameId={this.state.gameId} userId={this.state.userId} socket={this.socket} playerData={this.state.playerData} enemyName={this.state.enemy.username}/> : null
          }
      </div>
    );
  }
}

export default App;
