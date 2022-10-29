import Coin from "./game/Coin.js";
import Player from "./game/Player.js"

const selectFaceCoin = () => {
    const coin = new Coin();
    coin.setState(optionCoin.value);
}
const optionCoin = document.getElementById('optionCoin');
optionCoin.addEventListener('change', selectFaceCoin);


const bet = document.getElementById('bet');
const btnBet = document.getElementById('btnBet');

const doBet = () => {
    const P = new Player();
    P.setBet(bet.value);

    const betElement = document.getElementById("playerBet");
    betElement.textContent = "Player: " + P.bet;
}
btnBet.addEventListener('click', doBet);


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
