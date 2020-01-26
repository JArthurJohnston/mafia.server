const socket = require('socket.io')

function startSocketAPI(app, state){
    let connections = []
    const socketServer = app.listen(3001)
    const io = socket(socketServer)
    io.sockets.on('connection', newConnection)

    function newConnection(socket){
        socket.on('playerAdded', (player) => {
            console.log(`Player ${JSON.stringify(player)} added`);
    
            connections.push({Id: player.name, socket})
            
            state.addPlayer(player)
            socket.emit('playerReceived')
            io.sockets.emit('frenemyAdded', player)
        })
    
        socket.on('playerMoved', (player) =>{
            // console.log(`Player ${JSON.stringify(player)} moved`);
            state.movePlayer(player)
        })
    
        socket.on('bulletFired', (bullet) => {
            console.log(`Bullet fired: ${JSON.stringify(bullet)}`);
            
            io.sockets.emit('bulletReceived', bullet)
        })
    
        socket.on('disconnect', () => {
            console.log('disconnecting')
            
            const connection = connections.filter(e => e.socket === socket)
            removeConnection(connection)
        })
    
        socket.emit('connected')
    }
    
    function removeConnection(connection){
        connections = connections.filter(e => e.Id !== connection.Id)
        console.log('player removed:', connection.Id);
        
        io.sockets.emit('playerDisconnected', connection.Id)
    }
    
    setInterval(() => {
        io.sockets.emit('state_of_the_world', state)
    }, 1000/30);
    
    console.log('Socket API Running');
}

module.exports = startSocketAPI
