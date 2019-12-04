const Player = require('./Player')

class GameState {

    constructor(){
        this.playerMap = {}
        this.addPlayer = this.addPlayer.bind(this);
        this.movePlayer = this.movePlayer.bind(this);
    }

    addPlayer(player){
        const {name, x, y} = player
        if(!this.playerMap[name]){
            const newPlayer = new Player(name, x, y)
            this.playerMap[name] = newPlayer
        }
    }

    movePlayer({name, x, y}){
        if(this.playerMap[name]){
            this.playerMap[name].x = x
            this.playerMap[name].y = y
        }
    }
}

module.exports = GameState
