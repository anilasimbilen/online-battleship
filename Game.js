const Player = require("./Player");
class Game {
    constructor( id=0, name="") {
        this.moves = [];
        this.turn = 1;
        this.id = id;
        this.name = name;
        this.players = [];
    }
    getId(){
        return this.id;
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
    addPlayer(id, username, socket) {
        this.players.push(
                {
                    pl: new Player({id, game: this, username}),
                    username,
                    socket
                }
            );
    }
    removePlayer(id) {
        this.players = this.players.filter(p => p.pl.id !== id);
        return this.players.length > 0;
    }
}
module.exports = Game;