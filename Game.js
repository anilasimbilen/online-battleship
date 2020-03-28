const Player = require("./Player");
class Game {
    constructor(props) {
        if(props) {
            this.players = props.players ? props.players : [];
        } else {
            this.players = [];
        }
        this.moves = [];
        this.turn = 1;
    }
    getPlayers () {
        return this.players;
    }
    getMoves(){
        return this.moves;
    }
    addMove(move){
        this.moves.push(move);
    }
    swapTurn (turn = (this.turn == 1 ? 0 : 1)){
        this.turn = turn;
    }
    getTurn () {
        return this.turn;
    }
    addPlayer(id) {
        this.players.push(new Player({id, game: this, username: "NONE"}));
    }
}
module.exports = Game;