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
    socket.on('playerMoved', state.movePlayer)
    socket.on('playerAdded', state.addPlayer)
}
