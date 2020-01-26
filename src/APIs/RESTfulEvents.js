const express = require('express')

function startRESTAPI(state){
    const app = express()
    
    app.get('/players', (request, resposne) => {
        const players = Object.values(state.playerMap)
        resposne.send(players)
    })
    
    console.log('Restful API Running');

    return app
}

module.exports = startRESTAPI
