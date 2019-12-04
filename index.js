const GameState = require('./src/GameState')
const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(3001)
const io = socket(server)

io.sockets.on('connection', newConnection)
const state = new GameState()

function newConnection(socket){
    console.log("Connected")

    socket.on('playerAdded', (player) => {
        console.log(`Player ${JSON.stringify(player)} added`);
        
        state.addPlayer(player)
        socket.emit('playerReceived')
        io.sockets.emit('frenemyAdded', player)
    })

    socket.on('playerMoved', (player) =>{
        // console.log(`Player ${JSON.stringify(player)} moved`);
        state.movePlayer(player)
        // io.sockets.emit('frenemyMoved', state.players)
    })

    socket.emit('connected')
}

app.get('/players', (request, response) => {
    response.send(state.players)
})

setInterval(() => {
    io.sockets.emit('state_of_the_world', state)
}, 1000/30);

console.log('Mafia Server is Running');
