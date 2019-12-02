const {expect} = require('chai')
const GameState = require('../src/GameState')

describe('GameState', ()=> {
    let state
    const player = {
        name: 'harry',
        x: 2342,
        y:987
    }
    beforeEach(() => {
        state = new GameState()
    })

    describe('addPlayer', ()=> {
        it('should add a player to the players map', ()=> {
            state.addPlayer(player)
            const expectedPlayer = {
                x: 2342,
                y:987
            }

            expect(state.players['harry'].toString()).to.equal(expectedPlayer.toString())
        });
    });
});
