import React, { Component } from "react";
import styled from "styled-components";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const descriptions = [
    "Carrier, which has five consecutive holes",
    "Battleship, which has four consecutive holes",
    "Cruiser, which has three consecutive holes",
    "Submarine, which has three consecutive holes",
    "Destroyer, which has two consecutive holes"
];
const CARRIER = {
    name: "Carrier",
    color: "#007bff",
    length: 5    
};
const BATTLESHIP = {
    name: "Battleship",
    color: "#ffc107",
    length: 4
};
const CRUISER = {
    name: "Cruiser",
    color: "#28a745",
    length: 3
};
const SUBMARINE = {
    name: "Submarine",
    color: "#17a2b8",
    length: 3
}
const DESTROYER = {
    name: "Destroyer",
    color: "#007bff",
    length: 2
}

const StylesCreator = (game_state, owner = "none") => styled.div
`
    .box {
        width: ${game_state === "ingame" ? 4 : 5}vh;
        height: ${game_state === "ingame" ? 4 : 5}vh;
        background-color: #d1cfcf;
        border: solid 1px;
    }
    .hit {
        background-color: red;
    }
    .miss {
        background-color: white;
    }
    .cruiser {
        background-color: ${CRUISER.color};
    }
    .carrier {
        background-color: ${CARRIER.color};
    }
    .battleship {
        background-color: ${BATTLESHIP.color};
    }
    .submarine {
        background-color: ${SUBMARINE.color};
    }
    .destroyer {
        background-color: ${DESTROYER.color};
    }
    .sunk {
        background-color: black;
    }
    .main {
        display: flex;
        flex-direction: column;
        height: ${game_state === "ingame" ? 50 : 40}%;
        justify-content: center;
        margin-top: 3vh;
    } 
    .building {
        cursor: pointer;
    }
    ${
        owner === "self" ? "" : 
        `
        .ingame {
            cursor: pointer;
            :hover {
                background-color: #b0b0b0;
            }
        }
        `
    }
    h3 {
        font-size: 24px;
    }
    .bottom-btn-c {
        display: flex;
        flex-direction: row;
        width: 50%;
        align-items: center;
        justify-content: space-around;
    }
`
const {INITIAL_BOARD} = Object.freeze({INITIAL_BOARD: [
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E','E','E','E','E'],
]});


export const SHIPS = [CARRIER, BATTLESHIP, CRUISER,SUBMARINE, DESTROYER];
export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCords: props.initialCords ? this.copy2dArray(props.initialCords) :  Object.freeze([
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
            ]),
            carrier: {start: null, direction: null},
            battleship: {start: null, direction: null},
            cruiser: {start: null, direction: null},
            submarine: {start: null, direction: null},
            destroyer: {start: null, direction: null},
            selected: 0,
            currentDirection: "Horizontal",
            errorMessage: "",
            renderingCords: props.initialCords ? this.copy2dArray(props.initialCords) :  Object.freeze([
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
            ])
        }
        this.buttons = [
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
        ];
        this.preEdit=[[]];
        
    }
    
    setStateTracker = (state) => {
        this.setState(state);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.initialCords) {
            this.setState({totalCords: this.copy2dArray(nextProps.initialCords), renderingCords: this.copy2dArray(nextProps.initialCords)})
        }
    }
    getOnClick = (e) => {
        if(this.props.game_state !== "building") return this.props.onBoxClick(e);
        let box = e.target;
        let i, j; 
        [i, j] = box.id.split("|").map(k => Number(k));
        
        let {selected, currentDirection} = this.state;
        let nb = {start: [i, j], direction: currentDirection};

        if(this.getOnMouseEnter(i,j)) return;


        if(selected === 0) {
            this.setState({
                carrier: nb
            });
        } else if(selected === 1) {
            this.setState({
                battleship: nb
            });
        } else if(selected === 2) {
            this.setState({
                cruiser: nb
            });
        } else if(selected === 3) {
            this.setState({
                submarine: nb
            });
        } else if(selected === 4) {
            this.setState({
                destroyer: nb
            });
        } else {
            return;
        }
        this.setState({
            totalCords: this.copy2dArray(this.state.renderingCords), selected: this.state.selected + 1
        });
    }
    updateCord = ({i, j, val}) => {
        let {totalCords} = this.state;
        totalCords[i][j] = val;
        this.setStateTracker({totalCords});
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
    reset = () => {
        this.setState({
            totalCords: 
            Object.freeze([
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
            ]),
            carrier: {start: null, direction: null},
            battleship: {start: null, direction: null},
            cruiser: {start: null, direction: null},
            submarine: {start: null, direction: null},
            destroyer: {start: null, direction: null},
            selected: 0,
            currentDirection: "Direction",
            errorMessage: "",
            renderingCords: Object.freeze([
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
                ['E','E','E','E','E','E','E','E','E','E','E'],
            ])
        });
        this.buttons = [
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
            ['E','E','E','E','E','E','E','E','E','E','E'],
        ];
        this.preEdit=[[]];
    }
    getOnMouseEnter = (i, j) => {
        if(this.state.selected >= 5 || this.props.game_state !== "building") return true;
        let {currentDirection, selected} = this.state;
        let totalCordsCopy = this.copy2dArray(this.state.totalCords);
        let renderingCords = this.copy2dArray(this.state.totalCords);
        let ship = SHIPS[selected];
        if(this.state.currentDirection === "Vertical") {
            if(i + ship.length > totalCordsCopy.length) {
                this.setStateTracker({errorMessage: "Can not add " + ship.name + " with given direciton because ship is too big."})
            } else {
                for(let _i = 0; _i < ship.length; _i++) {
                    if(SHIPS.map(s => s.name.toLowerCase()).includes(this.state.totalCords[_i + i][j])) {
                        this.setStateTracker({errorMessage: "Can not add " + ship.name + " with given direciton because places are occupied."});
                        return true;
                    }
                    renderingCords[_i + i][j] = ship.name.toLowerCase();
                }
                this.setStateTracker({renderingCords});
            }
        } else {
            if(j + ship.length > totalCordsCopy[i].length) {
                this.setStateTracker({errorMessage: "Can not add " + ship.name + " with given direciton because ship is too big."});
            } else {
                for(let _j = 0; _j < ship.length; _j++) {
                    if(SHIPS.map(s => s.name.toLowerCase()).includes(this.state.totalCords[i][j + _j])) {
                        this.setStateTracker({errorMessage: "Can not add " + ship.name + " with given direciton because places are occupied."});
                        return true;
                    }
                    renderingCords[i][_j + j] = ship.name.toLowerCase();
                }
                this.setStateTracker({renderingCords});
                
            }
        }
    }
    getOnMouseLeave = () => {
        if(this.props.game_state !== "building") return;
        this.setStateTracker({errorMessage: "", renderingCords: this.copy2dArray(this.state.totalCords)});
    }
    render() {
        let {totalCords, renderingCords} = this.state;
        const Styles = StylesCreator(this.props.game_state, this.props.owner);
        return(
            <Styles style={this.props.game_state === "building" ? {width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"} : {}}>
                {this.props.game_state === "building" ? <h1>Place your board</h1> : null}
                {this.props.game_state === "building" ? 
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={0} onChange={selected => {
                             this.setStateTracker({selected})
                        }}>
                            <ToggleButton value={0} variant="primary">Carrier</ToggleButton>
                            <ToggleButton value={1} variant="warning">Battleship</ToggleButton>
                            <ToggleButton value={2} variant="success">Cruiser</ToggleButton>
                            <ToggleButton value={3} variant="info">Submarine</ToggleButton>
                            <ToggleButton value={4} variant="primary">Destroyer</ToggleButton>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    {this.state.currentDirection}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={e => this.setStateTracker({currentDirection: "Vertical"})}>Vertical</Dropdown.Item>
                                    <Dropdown.Item onClick={e => this.setStateTracker({currentDirection: "Horizontal"})}>Horizontal</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ToggleButtonGroup>
                    <h3 style={{marginTop: 10}}>{descriptions[this.state.selected]}</h3>
                  </div>
                  : null }
                {React.createElement("div", {className: "main"},...renderingCords.map((row, i) => 
                    React.createElement('div', {style: {display: "flex", flexDirection: "row", width: "100%", justifyContent: "center"}}, ...row.map((it, j) => <div alt={it} id={i + "|" + j} onMouseEnter={e => {
                            let splitted = e.target.id.split("|");
                            this.getOnMouseEnter(Number(splitted[0]), Number(splitted[1]));
                    }} onMouseLeave={e => {
                        this.getOnMouseLeave();
                    }} onClick={this.getOnClick}  ref={r => {
                        this.buttons[i][j] = r; 
                    }} className={"box " + it + " " + this.props.game_state}/>))
                    ))}
                    <h2 style={{color: "red", height: "1ch"}}>
                        {this.state.errorMessage}
                    </h2>
                    {this.props.game_state === "building" ? <div className="bottom-btn-c">
                        <Button onClick={this.reset}>
                            Reset
                        </Button>
                        {
                            this.state.carrier.start &&
                             this.state.battleship.start &&
                              this.state.cruiser.start &&
                               this.state.submarine.start &&
                                this.state.destroyer.start ?
                                 <Button onClick={e => {
                                         this.props.onBuildEnd({
                                             data: {
                                                totalCords: this.state.totalCords,
                                                carrier: this.state.carrier,
                                                battleship: this.state.battleship,
                                                cruiser: this.state.cruiser, 
                                                submarine: this.state.submarine, 
                                                destroyer: this.state.destroyer
                                               }
                                            })
                                        }
                                    }
                                    >Continue</Button> : null  
                        }
                    </div> : null}
            </Styles>
        );
    }
}