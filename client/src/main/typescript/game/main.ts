import { Game } from '../engine/Engine'
import { MyGame } from './MyGame'

(async function (document: Document) {
    const game: Game = new MyGame(document)

    game.run()
})(document)