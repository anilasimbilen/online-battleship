import React, { Component } from "react";
import Board, {SHIPS} from "./Board";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Styles = styled.div
`
    h1, h2{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default class InGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: props.turn,
            playerCords: props.playerData ? this.copy2dArray(props.playerData.totalCords) : null,
            enemyCords: [
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E']
            ],
            self_hits: {
                carrier: 0,
                battleship: 0,
                cruiser: 0, 
                submarine: 0, 
                destroyer: 0,
                E: 0
            },
            total_sunks: 0,
            isLost: false,
            isWon: false
        };
        this.socket = props.socket;
    }
    componentDidMount() {
        this.socket.on("MOVE_RECIEVED", (data) => {
            let {row, column} = data;
            var sf = this.state.self_hits;
            var field = this.state.playerCords[row][column];
            let feedback = field !== "E" ? "hit" : "miss";
            sf[field]++;
            var isSunk = false;
            var target = SHIPS.filter(ship => ship.name.toLowerCase() === field)
            if(target.length > 0) {
                isSunk = sf[target[0].name.toLowerCase()] === target[0].length;
            }
            let pc = this.copy2dArray(this.state.playerCords);
            var sunkCords = [];
            var ts = this.state.total_sunks;
            if(isSunk) {
                pc = pc.map((row, i) => row.map((col, j) => {
                    if(col === field || this.props.playerData.totalCords[i][j] === field) {
                        sunkCords.push({i,j});
                        ts++;
                        return "sunk";
                    } else {
                        return col;
                    }
                }))
            } else {
                pc[row][column] = feedback;
            }
            var isLost = ts >= SHIPS.map(s => s.length).reduce((acc, i) => acc + i);
            this.setState({turn: "self", playerCords: pc, self_hits: sf, total_sunks: ts, isLost});
            this.socket.emit("HIT_FEEDBACK", {
                row,
                column,
                sunk: {
                    isSunk,field, sunkCords, isLost
                },
                feedback: isSunk ? "sunk" : feedback,
                game_id: this.props.gameId,
                user_id: this.props.userId
            });
        });
        this.socket.on("BOARD_UPDATE", (data) => {
            let {row, column, feedback, sunk} = data;
            let arr = this.copy2dArray(this.state.enemyCords);
            if(sunk.isSunk) {
                sunk.sunkCords.forEach(({i,j}) => {
                    arr[i][j] = "sunk";
                })
            } else {
                arr[row][column] = feedback;
            }
            this.setState({enemyCords: arr, isWon: sunk.isLost});
        })
    }
    onBoxClick = (e) => {
        if(this.state.turn !== "self") return;
        let id = e.target.id;
        let row, column;
        [row, column] = id.split("|").map(i => Number(i));
        this.socket.emit("HIT", {
            game_id: this.props.gameId,
            user_id: this.props.userId,
            row,
            column
        });
        this.setState({turn: "enemy"});
    }
    copy2dArray = (arr) => {
        let res = [];
        for(let i in arr) {
            let curr = [];
            for(let j in arr[i]) {
                curr.push(arr[i][j]);
            }
            res.push(curr);
        }
        return res;
    }
    
    render() {
        if(this.state.isWon || this.state.isLost) {
            let numHit = this.state.enemyCords.map(row => row.filter(col => col === "hit" || col === "sunk").length).reduce((acc, i) => acc + i);
            let objHit = SHIPS.map(ship => ship.length).reduce((acc, i) => acc + i);
            let numEnemyHit = this.state.playerCords.map(row => row.filter(col => col === "hit" || col === "sunk").length).reduce((acc, i) => acc + i);
            return(
                <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Card
                        bg={this.state.isWon ? "success" : "danger"}
                        text={'white'}
                        style={{ width: '80%', height: "80%"}}
                        >
                        <Card.Header>{this.state.isWon ? "You Win" : "You Lose"}</Card.Header>
                        <Card.Body>
                            <Card.Title>Battle against {this.props.enemyName}{this.state.isWon ? " succeed." : " failed."} </Card.Title>
                            <Card.Text>
                                {this.state.isLost ? 
                                `You shoot ${numHit} coordinates but ${objHit - numHit} more was needed.`
                                : 
                                 `You win! Enemy was ${objHit - numEnemyHit} hits behind you.`
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
        return(
            <Styles style={{width: "100vw",height: "100vh"}}>
                <h1>
                    {this.state.turn === "self" ? "Your Turn" : "Enemy turn"}
                </h1>
                <Board game_state="ingame" owner="enemy" onBoxClick={this.onBoxClick} initialCords={this.state.enemyCords}/>
                <h2>Your board</h2>
                <Board game_state="ingame" owner="self" initialCords={this.state.playerCords}/>
            </Styles>
        );
    }
}