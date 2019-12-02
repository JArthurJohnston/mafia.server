const {expect} = require('chai')
const GameState = require('../src/GameState')
const Player = require('../src/Player')

describe('GameState', ()=> {
    let state
    const player = {
        name: 'harry',
        x: 2342,
        y:987
    }
    const expectedPlayer = new Player('harry', 2342, 987)

    beforeEach(() => {
        state = new GameState()
    })

    describe('addPlayer', ()=> {
        it('should add a player to the players map', ()=> {
            state.addPlayer(player)

            expect(state.playerMap['harry'].toString()).to.equal(expectedPlayer.toString())
            expect(state.players[0].toString()).to.equal(expectedPlayer.toString())
            expect(state.players.length).to.equal(1)
        });

        it('should only add one instance of a player with a given name', ()=> {
            state.addPlayer(player)
            state.addPlayer({
                name: 'harry',
                x: 546345,
                y: 67567
            })

            expect(state.playerMap['harry'].toString()).to.equal(expectedPlayer.toString())
            expect(state.players.length).to.equal(1)
        });
    });

    describe('movePlayer', ()=> {

        beforeEach(() => {
            state.addPlayer(player)
            state.movePlayer(
                {
                    name: 'harry',
                    x: 546345,
                    y: 67567
                }
            )
        })

        it('should update the players position', ()=> {
            expect(state.playerMap['harry'].x).to.equal(546345)
            expect(state.playerMap['harry'].y).to.equal(67567)
        });

        it('should also update the listed players position', ()=> {
            expect(state.players[0].x).to.equal(546345)
            expect(state.players[0].y).to.equal(67567)
        });
    });
});
