import Coin from "./game/Coin.js";
import { compareResult, doBet, selectFaceCoin } from "./game/Game.js";

function turnNumberToFace(num) {
    num == 0 ? num = "Cara" : num = "Sello";
    return num;
}

const showResult = (result) => result == true ? "Ganaste" : "Perdiste";

const play = () => {
    const game = document.getElementById('game');

    let faceCoin = Math.floor(Math.random() * 2);
    const C = new Coin(faceCoin);
    C.setFace = faceCoin;

    let playerCoin = selectFaceCoin();

    let resultGame = compareResult(C.face, playerCoin);
    console.log(playerCoin)

    const playerBet = doBet();
    game.innerHTML =
        `<h1>Tu juego</h1>
        Cara de la moneda: ${turnNumberToFace(C.face)} <br>
        Tu seleccion: ${turnNumberToFace(playerCoin)} <br>
        Tu apuesta: ${playerBet.bet} <br>
        ${showResult(resultGame)}
        `;


}
const btnPLay = document.getElementById('btn-play');
btnPLay.addEventListener("click", play)
