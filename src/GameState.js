class GameState {

    constructor(){
        this.players = {}
        this.addPlayer = this.addPlayer.bind(this);
        this.movePlayer = this.movePlayer.bind(this);
    }

    addPlayer({name, x, y}){
        this.players[name] = {x, y}
    }

    movePlayer({name, x, y}){
        this.players[name].x = x
        this.players[name].y = y
    }
}

module.exports = GameState
