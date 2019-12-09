const GameState = require('./src/GameState')
const express = require('express')
const socket = require('socket.io')

const app = express()
const socketServer = app.listen(3001)
const io = socket(socketServer)

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
        sendPositionUpdates()
        // io.sockets.emit('frenemyMoved', state.players)
    })

    socket.on('bulletFired', (bullet) => {
        console.log(`Bullet fired: ${JSON.stringify(bullet)}`);
        
        io.sockets.emit('bulletReceived', bullet)
    })

    socket.on('getAllPlayers', () => {
        const players = Object.values(state.playerMap)
        socket.emit('allPlayers', players)
    })

    socket.emit('connected')
}

function sendPositionUpdates(){
    io.sockets.emit('state_of_the_world', state)
}

// setInterval(() => {
//     io.sockets.emit('state_of_the_world', state)
// }, 1000/30);

console.log('Mafia Server is Running');
