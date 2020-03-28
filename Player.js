class Player {
    constructor(props) {
        this.fields = props.fields ? props.fields : [[]];
        this.username = props.username;
        this.game = props.game;
        this.id = props.id;
        this.isReady = false;
    }
    getFields (){
        return this.fields;
    }
    changeField ({fields, x, y, value}) {
        if(fields) {
            this.fields = fields;
        } else {
            this.fields[x][y] = value;
        }
    }
    getUsername () {
        return this.username;
    }
    getId() {
        return this.id;
    }
}
module.exports = Player;