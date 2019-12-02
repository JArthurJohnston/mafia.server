class Player {
    constructor(name, x, y){
        this.name = name
        this.x = x
        this.y = y
    }

    toString() {
        return `Player: ${this.name} at (${this.x}, ${this.y})`
    }
}

module.exports = Player
