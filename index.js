const startRESTAPI =  require('./src/APIs/RESTfulEvents')
const startSocketAPI =  require('./src/APIs/SocketEvents')
const GameState = require('./src/GameState')

const state = new GameState()

const app = startRESTAPI(state)
startSocketAPI(app, state)

console.log('Mafia Server is Running')
