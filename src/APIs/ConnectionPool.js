const uuid = require('uuid/v1');

class ConnectionPool {

    constructor(){
        this.connections = []
    }

    addConnection = (socket) => {
        const id = uuid()
        const newConnection = {
            id, socket
        }
        this.connections.push(newConnection)
        return newConnection
    }

    removeConnection = () => {}
}

module.exports = ConnectionPool