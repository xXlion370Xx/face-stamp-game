import Coin from "./game/Coin.js";
import { compareResult, doBet, selectFaceCoin } from "./game/Game.js";


const play = () => {
    const game = document.getElementById('game');

    let faceCoin = Math.floor(Math.random() * 2);
    const C = new Coin(faceCoin);
    C.setFace = faceCoin;

    let playerCoin = selectFaceCoin();

    let result = compareResult(C.face, playerCoin);

    const playerBet = doBet();
    game.innerHTML =
        `<h1>Tu juego</h1>
        Cara de la moneda: ${C.face} <br>
        Tu seleccion: ${playerCoin} <br>
        Tu apuesta: ${playerBet.bet}
        `;
}
const btnPLay = document.getElementById('btn-play');
btnPLay.addEventListener("click", play)
