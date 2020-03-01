class Player {
    constructor(name, x, y, state){
        this.name = name
        this.x = x
        this.y = y
        this.state = state
    }

    toString() {
        return `Player: ${this.name} at (${this.x}, ${this.y})`
    }
}

module.exports = Player
