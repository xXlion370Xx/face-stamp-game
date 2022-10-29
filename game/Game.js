import Coin from "./Coin.js";
import Player from "./Player.js";

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