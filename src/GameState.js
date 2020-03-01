const Player = require('./Player')

class GameState {

    constructor(){
        this.playerMap = {}
        this.bullets = []
        this.addPlayer = this.addPlayer.bind(this);
        this.movePlayer = this.movePlayer.bind(this);
        this.removePlayer = this.removePlayer.bind(this);
    }

    addPlayer(player){
        const {name, x, y, state} = player
        if(!this.playerMap[name]){
            const newPlayer = new Player(name, x, y, state)
            this.playerMap[name] = newPlayer
        }
    }

    removePlayer(playerName) {
        if(this.playerMap[playerName])
            delete(this.playerMap[playerName])
    }

    movePlayer({name, x, y}){
        if(this.playerMap[name]){
            this.playerMap[name].x = x
            this.playerMap[name].y = y
        }
    }
}

module.exports = GameState
