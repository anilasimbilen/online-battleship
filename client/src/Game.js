export default class Game {
    constructor(props) {
        this.players = props.players;
        this.moves = [];
        this.turn = 1;
        this.socket = props.socket;
        this.socket.on('MOVE_INCOMING', function(data) {
            console.log(data);
        })
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
}