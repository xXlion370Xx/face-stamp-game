import Coin from "./game/Coin.js";
import Player from "./game/Player.js"


const play = () => {
    const game = document.getElementById('game');

    let faceCoin = Math.floor(Math.random() * 2);

    const C = new Coin(faceCoin);
    C.setState = faceCoin;

    game.innerHTML =
        `<h2>Tu juego:</h2>
        Cara de la moneda: ${C.state}`;

}
const btnPLay = document.getElementById('btn-play');
btnPLay.addEventListener("click", play)
